package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.PolicyLife;
import com.example.MIS_Project.Repository.PolicyLifeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@SuppressWarnings("null")
public class PolicyLifeService {

    @Autowired
    private PolicyLifeRepository policyLifeRepository;

    public List<PolicyLife> getAllPolicyLives() {
        return policyLifeRepository.findAll();
    }

    public Optional<PolicyLife> getPolicyLifeById(Long id) {
        return policyLifeRepository.findById(id);
    }

    public PolicyLife savePolicyLife(PolicyLife policyLife) {
        return policyLifeRepository.save(policyLife);
    }

    public void deletePolicyLife(Long id) {
        policyLifeRepository.deleteById(id);
    }
}
