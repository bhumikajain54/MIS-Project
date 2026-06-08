package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.OCRData;
import com.example.MIS_Project.Service.OCRDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/ocrdata")
public class OCRDataController {

    @Autowired
    private OCRDataService ocrDataService;

    // Create or update OCR data
    @PostMapping
    public ResponseEntity<OCRData> createOCRData(@RequestBody OCRData ocrData) {
        OCRData savedOCRData = ocrDataService.saveOCRData(ocrData);
        return ResponseEntity.ok(savedOCRData);
    }

    // Retrieve all OCR data
    @GetMapping
    public ResponseEntity<List<OCRData>> getAllOCRData() {
        List<OCRData> ocrDataList = ocrDataService.getAllOCRData();
        return ResponseEntity.ok(ocrDataList);
    }

    // Retrieve OCR data by ID
    @GetMapping("/{id}")
    public ResponseEntity<OCRData> getOCRDataById(@PathVariable Long id) {
        Optional<OCRData> ocrData = ocrDataService.getOCRDataById(id);
        return ocrData.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Retrieve OCR data by policy number
    @GetMapping("/policy/{policyNumber}")
    public ResponseEntity<List<OCRData>> getOCRDataByPolicyNumber(@PathVariable String policyNumber) {
        List<OCRData> ocrDataList = ocrDataService.getOCRDataByPolicyNumber(policyNumber);
        return ResponseEntity.ok(ocrDataList);
    }

    // Delete OCR data by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOCRDataById(@PathVariable Long id) {
        ocrDataService.deleteOCRDataById(id);
        return ResponseEntity.noContent().build();
    }
}
