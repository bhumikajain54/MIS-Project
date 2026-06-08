package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Service.EmailService;
import com.example.MIS_Project.Service.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
public class MISReportController {

    @Autowired
    private EmailService emailService;

    @Autowired
    private ExcelService excelService;

    @PostMapping("/send-policy-email")
    public ResponseEntity<String> sendPolicyEmail(@RequestParam String policyNumber,
            @RequestParam String emailRecipient) {
        emailService.sendPolicyEmail(policyNumber, emailRecipient);
        return ResponseEntity.ok("Email Sent Successfully!");
    }

    @GetMapping("/export-policies")
    public ResponseEntity<byte[]> exportPoliciesToExcel() throws IOException {
        byte[] excelData = excelService.exportPoliciesToExcel();
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=policies.xlsx")
                .body(excelData);
    }

    @PostMapping("/import-policies")
    public ResponseEntity<String> importPolicies(@RequestParam("file") MultipartFile file) throws IOException {
        excelService.importPoliciesFromExcel(file);
        return ResponseEntity.status(HttpStatus.CREATED).body("Policies Imported Successfully!");
    }
}
