package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.AgentPOS;
import com.example.MIS_Project.Service.AgentPOSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/agentpos")
public class AgentPOSController {

    @Autowired
    private AgentPOSService agentPOSService;

    // Get all AgentPOS
    @GetMapping
    public List<AgentPOS> getAllAgentPOS() {
        return agentPOSService.getAllAgentPOS();
    }

    // Get a specific AgentPOS by ID
    @GetMapping("/{id}")
    public ResponseEntity<AgentPOS> getAgentPOSById(@PathVariable String id) {
        Optional<AgentPOS> agentPOS = agentPOSService.getAgentPOSById(id);
        return agentPOS.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Add a new AgentPOS
    @PostMapping
    public AgentPOS addAgentPOS(@RequestBody AgentPOS agentPOS) {
        return agentPOSService.addAgentPOS(agentPOS);
    }

    // Update an existing AgentPOS
    @PutMapping("/{id}")
    public ResponseEntity<AgentPOS> updateAgentPOS(@PathVariable String id, @RequestBody AgentPOS agentPOS) {
        AgentPOS updatedAgentPOS = agentPOSService.updateAgentPOS(id, agentPOS);
        if (updatedAgentPOS != null) {
            return ResponseEntity.ok(updatedAgentPOS);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete an AgentPOS
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgentPOS(@PathVariable String id) {
        agentPOSService.deleteAgentPOS(id);
        return ResponseEntity.noContent().build();
    }
}
