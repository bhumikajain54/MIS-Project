package com.example.MIS_Project.Service;


import com.example.MIS_Project.Model.Policy;
import com.example.MIS_Project.Repository.PolicyRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
public class ExcelService {

    @Autowired
    private PolicyRepository policyRepository;

    public byte[] exportPoliciesToExcel() throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Policies");

        // Create the header row
        Row header = sheet.createRow(0);
        header.createCell(0).setCellValue("Policy Number");
        header.createCell(1).setCellValue("Policy Name");

        // Add policy data
        List<Policy> policies = policyRepository.findAll();
        int rowIndex = 1;
        for (Policy policy : policies) {
            Row row = sheet.createRow(rowIndex++);
            row.createCell(0).setCellValue(policy.getPolicyNumber());
            row.createCell(1).setCellValue(policy.getPolicyName());
        }

        // Write workbook to a ByteArrayOutputStream
        try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
            workbook.write(outputStream);
            workbook.close();
            return outputStream.toByteArray();
        }
    }

    public void importPoliciesFromExcel(MultipartFile file) throws IOException {
        Workbook workbook = new XSSFWorkbook(file.getInputStream());
        Sheet sheet = workbook.getSheetAt(0);

        for (Row row : sheet) {
            if (row.getRowNum() == 0) continue;

            String policyNumber = row.getCell(0).getStringCellValue();
            String policyName = row.getCell(1).getStringCellValue();

            Policy policy = new Policy();
            policy.setPolicyNumber(policyNumber);
            policy.setPolicyName(policyName);

            policyRepository.save(policy);
        }
        workbook.close();
    }

}
