package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.Premium;
import com.example.MIS_Project.Service.PremiumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/premiums")
public class PremiumController {

    private final PremiumService premiumService;

    @Autowired
    public PremiumController(PremiumService premiumService) {
        this.premiumService = premiumService;
    }

    // Get all Premiums
    @GetMapping
    public List<Premium> getAllPremiums() {
        return premiumService.getAllPremiums();
    }

    // Get Premium by ID
    @GetMapping("/{id}")
    public ResponseEntity<Premium> getPremiumById(@PathVariable("id") Long id) {
        Optional<Premium> premium = premiumService.getPremiumById(id);
        return premium.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Save a Premium
    @PostMapping
    public ResponseEntity<Premium> savePremium(@RequestBody Premium premium) {
        Premium savedPremium = premiumService.savePremium(premium);
        return ResponseEntity.ok(savedPremium);
    }

    // Delete a Premium
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePremium(@PathVariable("id") Long id) {
        premiumService.deletePremium(id);
        return ResponseEntity.noContent().build();
    }
}
