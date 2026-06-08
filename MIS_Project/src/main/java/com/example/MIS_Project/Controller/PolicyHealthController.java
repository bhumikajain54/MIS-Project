package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.PolicyHealth;
import com.example.MIS_Project.Service.PolicyHealthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/policyHealth")
public class PolicyHealthController {

    @Autowired
    private PolicyHealthService policyHealthService;

    // Create a new PolicyHealth record
    @PostMapping
    public ResponseEntity<PolicyHealth> createPolicyHealth(@RequestBody PolicyHealth policyHealth) {
        return ResponseEntity.ok(policyHealthService.savePolicyHealth(policyHealth));
    }

    // Get all PolicyHealth records
    @GetMapping
    public ResponseEntity<List<PolicyHealth>> getAllPolicyHealths() {
        return ResponseEntity.ok(policyHealthService.getAllPolicyHealths());
    }

    // Get a PolicyHealth record by ID
    @GetMapping("/{id}")
    public ResponseEntity<PolicyHealth> getPolicyHealthById(@PathVariable Long id) {
        return policyHealthService.getPolicyHealthById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Update a PolicyHealth record
    @PutMapping("/{id}")
    public ResponseEntity<PolicyHealth> updatePolicyHealth(@PathVariable Long id,
            @RequestBody PolicyHealth updatedPolicyHealth) {
        try {
            PolicyHealth updatedPolicy = policyHealthService.updatePolicyHealth(id, updatedPolicyHealth);
            return ResponseEntity.ok(updatedPolicy);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a PolicyHealth record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicyHealth(@PathVariable Long id) {
        policyHealthService.deletePolicyHealth(id);
        return ResponseEntity.noContent().build();
    }
}
