package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.PolicyNonMotor;
import com.example.MIS_Project.Service.PolicyNonMotorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/policyNonMotor")
public class PolicyNonMotorController {

    @Autowired
    private PolicyNonMotorService policyNonMotorService;

    // Create or update a PolicyNonMotor
    @PostMapping
    public ResponseEntity<PolicyNonMotor> createOrUpdatePolicyNonMotor(@RequestBody PolicyNonMotor policyNonMotor) {
        PolicyNonMotor savedPolicyNonMotor = policyNonMotorService.save(policyNonMotor);
        return new ResponseEntity<>(savedPolicyNonMotor, HttpStatus.CREATED);
    }

    // Get all PolicyNonMotor entities
    @GetMapping
    public ResponseEntity<List<PolicyNonMotor>> getAllPolicyNonMotors() {
        List<PolicyNonMotor> policyNonMotors = policyNonMotorService.findAll();
        return new ResponseEntity<>(policyNonMotors, HttpStatus.OK);
    }

    // Get a PolicyNonMotor by id
    @GetMapping("/{id}")
    public ResponseEntity<PolicyNonMotor> getPolicyNonMotorById(@PathVariable Long id) {
        Optional<PolicyNonMotor> policyNonMotor = policyNonMotorService.findById(id);
        return policyNonMotor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a PolicyNonMotor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicyNonMotor(@PathVariable Long id) {
        policyNonMotorService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
