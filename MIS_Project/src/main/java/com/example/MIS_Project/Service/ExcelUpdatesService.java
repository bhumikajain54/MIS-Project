package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.ExcelUpdates;
import com.example.MIS_Project.Repository.ExcelUpdatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ExcelUpdatesService {

    @Autowired
    private ExcelUpdatesRepository excelUpdatesRepository;

    // Save or update Excel update
    public ExcelUpdates saveExcelUpdate(ExcelUpdates excelUpdates) {
        return excelUpdatesRepository.save(excelUpdates);
    }

    // Retrieve all Excel updates
    public List<ExcelUpdates> getAllExcelUpdates() {
        return excelUpdatesRepository.findAll();
    }

    // Retrieve Excel update by ID
    public Optional<ExcelUpdates> getExcelUpdateById(Long id) {
        return excelUpdatesRepository.findById(id);
    }

    // Retrieve Excel updates by policy number
    public List<ExcelUpdates> getExcelUpdatesByPolicyNumber(String policyNumber) {
        return excelUpdatesRepository.findByPolicyNumber(policyNumber);
    }

    // Delete Excel update by ID
    public void deleteExcelUpdateById(Long id) {
        excelUpdatesRepository.deleteById(id);
    }
}

