package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.Insurer;
import com.example.MIS_Project.Repository.InsurerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service

public class InsurerService {

    @Autowired
    private InsurerRepository insurerRepository;

    public Insurer saveInsurer(Insurer insurer) {
        return insurerRepository.save(insurer);
    }

    public Insurer getInsurer(String insurerName) {
        return insurerRepository.findById(insurerName).orElse(null);
    }

    public List<Insurer> getAllInsurers() {
        return insurerRepository.findAll();
    }

    public void deleteInsurer(String insurerName) {
        insurerRepository.deleteById(insurerName);
    }
}
