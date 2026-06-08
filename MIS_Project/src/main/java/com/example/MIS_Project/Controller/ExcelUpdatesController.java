package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.ExcelUpdates;
import com.example.MIS_Project.Service.ExcelUpdatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/excelupdates")
public class ExcelUpdatesController {

    @Autowired
    private ExcelUpdatesService excelUpdatesService;

    // Create or update Excel update
    @PostMapping
    public ResponseEntity<ExcelUpdates> saveExcelUpdate(@RequestBody ExcelUpdates excelUpdates) {
        ExcelUpdates savedUpdate = excelUpdatesService.saveExcelUpdate(excelUpdates);
        return ResponseEntity.ok(savedUpdate);
    }

    // Retrieve all Excel updates
    @GetMapping
    public ResponseEntity<List<ExcelUpdates>> getAllExcelUpdates() {
        List<ExcelUpdates> updatesList = excelUpdatesService.getAllExcelUpdates();
        return ResponseEntity.ok(updatesList);
    }

    // Retrieve Excel update by ID
    @GetMapping("/{id}")
    public ResponseEntity<ExcelUpdates> getExcelUpdateById(@PathVariable Long id) {
        Optional<ExcelUpdates> excelUpdate = excelUpdatesService.getExcelUpdateById(id);
        return excelUpdate.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Retrieve Excel updates by policy number
    @GetMapping("/policy/{policyNumber}")
    public ResponseEntity<List<ExcelUpdates>> getExcelUpdatesByPolicyNumber(@PathVariable String policyNumber) {
        List<ExcelUpdates> updatesList = excelUpdatesService.getExcelUpdatesByPolicyNumber(policyNumber);
        return ResponseEntity.ok(updatesList);
    }

    // Delete Excel update by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExcelUpdateById(@PathVariable Long id) {
        excelUpdatesService.deleteExcelUpdateById(id);
        return ResponseEntity.noContent().build();
    }
}
