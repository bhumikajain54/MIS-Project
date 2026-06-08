package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.PolicyMotor;
import com.example.MIS_Project.Service.PolicyMotorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/policy-motors")
public class PolicyMotorController {

    @Autowired
    private PolicyMotorService policyMotorService;

    // Get all PolicyMotors
    @GetMapping
    public List<PolicyMotor> getAllPolicyMotors() {
        return policyMotorService.getAllPolicyMotors();
    }

    // Get PolicyMotor by ID
    @GetMapping("/{id}")
    public ResponseEntity<PolicyMotor> getPolicyMotorById(@PathVariable Long id) {
        Optional<PolicyMotor> policyMotor = policyMotorService.getPolicyMotorById(id);
        return policyMotor.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create or update a PolicyMotor
    @PostMapping
    public ResponseEntity<PolicyMotor> createOrUpdatePolicyMotor(@RequestBody PolicyMotor policyMotor) {
        PolicyMotor savedPolicyMotor = policyMotorService.savePolicyMotor(policyMotor);
        return ResponseEntity.ok(savedPolicyMotor);
    }

    // Delete a PolicyMotor by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicyMotor(@PathVariable Long id) {
        policyMotorService.deletePolicyMotor(id);
        return ResponseEntity.noContent().build();
    }
}
