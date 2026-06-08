package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.Client;
import com.example.MIS_Project.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public Optional<Client> getClientByName(String clientName) {
        return clientRepository.findById(clientName);
    }

    public Client saveClient(Client client) {
        return clientRepository.save(client);
    }

    public void deleteClient(String clientName) {
        clientRepository.deleteById(clientName);
    }

    public Client updateClient(String clientName, Client updatedClient) {
        return clientRepository.findById(clientName)
                .map(client -> {
                    client.setEmailId(updatedClient.getEmailId());
                    client.setMobileNumber(updatedClient.getMobileNumber());
                    client.setSegment(updatedClient.getSegment());
                    return clientRepository.save(client);
                })
                .orElseThrow(() -> new RuntimeException("Client not found with name: " + clientName));
    }
}
