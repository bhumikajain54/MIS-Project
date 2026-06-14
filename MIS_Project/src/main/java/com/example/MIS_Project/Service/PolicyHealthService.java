package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.PolicyHealth;
import com.example.MIS_Project.Repository.PolicyHealthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PolicyHealthService {

    @Autowired
    private PolicyHealthRepository policyHealthRepository;

    // Create a new PolicyHealth record
    public PolicyHealth savePolicyHealth(PolicyHealth policyHealth) {
        return policyHealthRepository.save(policyHealth);
    }

    // Get all PolicyHealth records
    public List<PolicyHealth> getAllPolicyHealths() {
        return policyHealthRepository.findAll();
    }

    // Get a PolicyHealth record by ID
    public Optional<PolicyHealth> getPolicyHealthById(Long id) {
        return policyHealthRepository.findById(id);
    }

    // Update a PolicyHealth record
    public PolicyHealth updatePolicyHealth(Long id, PolicyHealth updatedPolicyHealth) {
        return policyHealthRepository.findById(id).map(policyHealth -> {
            policyHealth.setInsuredName1(updatedPolicyHealth.getInsuredName1());
            policyHealth.setInsuredAge1(updatedPolicyHealth.getInsuredAge1());
            policyHealth.setInsuredRelation1(updatedPolicyHealth.getInsuredRelation1());
            policyHealth.setInsuredDob1(updatedPolicyHealth.getInsuredDob1());
            return policyHealthRepository.save(policyHealth);
        }).orElseThrow(() -> new RuntimeException("PolicyHealth not found with id " + id));
    }

    // Delete a PolicyHealth record
    public void deletePolicyHealth(Long id) {
        policyHealthRepository.deleteById(id);
    }
}
