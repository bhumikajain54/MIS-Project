package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.PolicyLife;
import com.example.MIS_Project.Service.PolicyLifeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/policy-life")
public class PolicyLifeController {

    @Autowired
    private PolicyLifeService policyLifeService;

    @GetMapping
    public List<PolicyLife> getAllPolicyLives() {
        return policyLifeService.getAllPolicyLives();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PolicyLife> getPolicyLifeById(@PathVariable Long id) {
        Optional<PolicyLife> policyLife = policyLifeService.getPolicyLifeById(id);
        return policyLife.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PolicyLife> createPolicyLife(@RequestBody PolicyLife policyLife) {
        PolicyLife savedPolicyLife = policyLifeService.savePolicyLife(policyLife);
        return new ResponseEntity<>(savedPolicyLife, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PolicyLife> updatePolicyLife(@PathVariable Long id, @RequestBody PolicyLife policyLife) {
        Optional<PolicyLife> existingPolicyLife = policyLifeService.getPolicyLifeById(id);
        if (existingPolicyLife.isPresent()) {
            policyLife.setPolicy(existingPolicyLife.get().getPolicy());
            PolicyLife updatedPolicyLife = policyLifeService.savePolicyLife(policyLife);
            return ResponseEntity.ok(updatedPolicyLife);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePolicyLife(@PathVariable Long id) {
        policyLifeService.deletePolicyLife(id);
        return ResponseEntity.noContent().build();
    }
}
