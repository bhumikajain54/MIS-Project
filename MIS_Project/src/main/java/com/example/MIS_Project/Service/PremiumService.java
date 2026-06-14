package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.Premium;
import com.example.MIS_Project.Repository.PremiumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PremiumService {

    private final PremiumRepository premiumRepository;

    @Autowired
    public PremiumService(PremiumRepository premiumRepository) {
        this.premiumRepository = premiumRepository;
    }

    // Save a Premium
    public Premium savePremium(Premium premium) {
        return premiumRepository.save(premium);
    }

    // Get all Premiums
    public List<Premium> getAllPremiums() {
        return premiumRepository.findAll();
    }

    // Get Premium by ID
    public Optional<Premium> getPremiumById(Long premiumId) {
        return premiumRepository.findById(premiumId);
    }

    // Delete a Premium
    public void deletePremium(Long premiumId) {
        premiumRepository.deleteById(premiumId);
    }
}
