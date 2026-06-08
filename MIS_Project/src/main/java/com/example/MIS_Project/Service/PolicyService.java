package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.*;
import com.example.MIS_Project.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    // Create or Update a Policy
    public Policy savePolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    // Get All Policies
    public List<Policy> getAllPolicies() {
        return policyRepository.findAll();
    }

    // Get Policy by ID
    public Optional<Policy> getPolicyById(String policyNumber) {
        return policyRepository.findById(policyNumber);
    }

    // Delete Policy by ID
    public void deletePolicy(String policyNumber) {
        policyRepository.deleteById(policyNumber);
    }
}