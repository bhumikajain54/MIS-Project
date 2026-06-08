package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.Insurer;
import com.example.MIS_Project.Service.InsurerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/insurers")
public class InsurerController {

    @Autowired
    private InsurerService insurerService;

    // Create a new Insurer
    @PostMapping
    public Insurer createInsurer(@RequestBody Insurer insurer) {
        return insurerService.saveInsurer(insurer);
    }

    // Get Insurer by Name
    @GetMapping("/{insurerName}")
    public Insurer getInsurer(@PathVariable String insurerName) {
        return insurerService.getInsurer(insurerName);
    }

    // Get all Insurers
    @GetMapping
    public List<Insurer> getAllInsurers() {
        return insurerService.getAllInsurers();
    }

    // Delete an Insurer by Name
    @DeleteMapping("/{insurerName}")
    public void deleteInsurer(@PathVariable String insurerName) {
        insurerService.deleteInsurer(insurerName);
    }
}
