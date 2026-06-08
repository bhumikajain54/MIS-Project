package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.Policy;
import com.example.MIS_Project.Service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/policies")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    // Create or Update a Policy
    @PostMapping
    public ResponseEntity<Policy> createOrUpdatePolicy(@RequestBody Policy policy) {
        Policy savedPolicy = policyService.savePolicy(policy);
        return ResponseEntity.ok(savedPolicy);
    }

    // Get All Policies
    @GetMapping
    public ResponseEntity<List<Policy>> getAllPolicies() {
        List<Policy> policies = policyService.getAllPolicies();
        return ResponseEntity.ok(policies);
    }

    // Get Policy by ID
    @GetMapping("/{policyNumber}")
    public ResponseEntity<Policy> getPolicyById(@PathVariable String policyNumber) {
        Optional<Policy> policy = policyService.getPolicyById(policyNumber);
        return policy.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete Policy by ID
    @DeleteMapping("/{policyNumber}")
    public ResponseEntity<Void> deletePolicy(@PathVariable String policyNumber) {
        policyService.deletePolicy(policyNumber);
        return ResponseEntity.noContent().build();
    }
}
