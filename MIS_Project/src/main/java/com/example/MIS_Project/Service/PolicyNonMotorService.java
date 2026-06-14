package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.PolicyNonMotor;
import com.example.MIS_Project.Repository.PolicyNonMotorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PolicyNonMotorService {

    @Autowired
    private PolicyNonMotorRepository policyNonMotorRepository;

    // Create or update a PolicyNonMotor
    public PolicyNonMotor save(PolicyNonMotor policyNonMotor) {
        return policyNonMotorRepository.save(policyNonMotor);
    }

    // Get a PolicyNonMotor by id
    public Optional<PolicyNonMotor> findById(Long id) {
        return policyNonMotorRepository.findById(id);
    }

    // Get all PolicyNonMotor entities
    public List<PolicyNonMotor> findAll() {
        return policyNonMotorRepository.findAll();
    }

    // Delete a PolicyNonMotor
    public void delete(Long id) {
        policyNonMotorRepository.deleteById(id);
    }
}
