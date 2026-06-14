package com.example.MIS_Project.Service;

import com.example.MIS_Project.Model.OCRData;
import com.example.MIS_Project.Repository.OCRDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class OCRDataService {

    @Autowired
    private OCRDataRepository ocrDataRepository;

    // Save or update OCR data
    public OCRData saveOCRData(OCRData ocrData) {
        return ocrDataRepository.save(ocrData);
    }

    // Retrieve all OCR data
    public List<OCRData> getAllOCRData() {
        return ocrDataRepository.findAll();
    }

    // Retrieve OCR data by ID
    public Optional<OCRData> getOCRDataById(Long id) {
        return ocrDataRepository.findById(id);
    }

    // Retrieve OCR data by policy number
    public List<OCRData> getOCRDataByPolicyNumber(String policyNumber) {
        return ocrDataRepository.findByPolicyNumber(policyNumber);
    }

    // Delete OCR data by ID
    public void deleteOCRDataById(Long id) {
        ocrDataRepository.deleteById(id);
    }
}
