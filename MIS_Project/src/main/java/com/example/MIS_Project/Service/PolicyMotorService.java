package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.PolicyMotor;
import com.example.MIS_Project.Repository.PolicyMotorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PolicyMotorService {

    @Autowired
    private PolicyMotorRepository policyMotorRepository;

    // Create or update a PolicyMotor
    public PolicyMotor savePolicyMotor(PolicyMotor policyMotor) {
        return policyMotorRepository.save(policyMotor);
    }

    // Get all PolicyMotors
    public List<PolicyMotor> getAllPolicyMotors() {
        return policyMotorRepository.findAll();
    }

    // Get a PolicyMotor by its ID
    public Optional<PolicyMotor> getPolicyMotorById(Long id) {
        return policyMotorRepository.findById(id);
    }

    // Delete a PolicyMotor by its ID
    public void deletePolicyMotor(Long id) {
        policyMotorRepository.deleteById(id);
    }
}
