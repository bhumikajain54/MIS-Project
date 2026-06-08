package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.Client;
import com.example.MIS_Project.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clients")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    @GetMapping("/{clientName}")
    public ResponseEntity<Client> getClientByName(@PathVariable String clientName) {
        return clientService.getClientByName(clientName)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client savedClient = clientService.saveClient(client);
        return ResponseEntity.ok(savedClient);
    }

    @PutMapping("/{clientName}")
    public ResponseEntity<Client> updateClient(@PathVariable String clientName, @RequestBody Client updatedClient) {
        try {
            Client client = clientService.updateClient(clientName, updatedClient);
            return ResponseEntity.ok(client);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{clientName}")
    public ResponseEntity<Void> deleteClient(@PathVariable String clientName) {
        clientService.deleteClient(clientName);
        return ResponseEntity.noContent().build();
    }
}
