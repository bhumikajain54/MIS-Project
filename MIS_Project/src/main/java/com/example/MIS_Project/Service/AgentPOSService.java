package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.AgentPOS;
import com.example.MIS_Project.Repository.AgentPOSRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class AgentPOSService {

    @Autowired
    private AgentPOSRepository agentPOSRepository;

    // Fetch all AgentPOS entries
    public List<AgentPOS> getAllAgentPOS() {
        return agentPOSRepository.findAll();
    }

    // Fetch a specific AgentPOS by ID
    public Optional<AgentPOS> getAgentPOSById(String id) {
        return agentPOSRepository.findById(id);
    }

    // Add a new AgentPOS
    public AgentPOS addAgentPOS(AgentPOS agentPOS) {
        return agentPOSRepository.save(agentPOS);
    }

    // Update an existing AgentPOS
    public AgentPOS updateAgentPOS(String id, AgentPOS agentPOSDetails) {
        Optional<AgentPOS> optionalAgentPOS = agentPOSRepository.findById(id);
        if (optionalAgentPOS.isPresent()) {
            AgentPOS existingAgentPOS = optionalAgentPOS.get();
            existingAgentPOS.setAgentPosNameCode2(agentPOSDetails.getAgentPosNameCode2());
            return agentPOSRepository.save(existingAgentPOS);
        }
        return null; // Handle not found case appropriately
    }

    // Delete an AgentPOS
    public void deleteAgentPOS(String id) {
        agentPOSRepository.deleteById(id);
    }
}
