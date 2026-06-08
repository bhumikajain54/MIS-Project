package com.example.MIS_Project.Controller;

import com.example.MIS_Project.Model.InsuranceCompany;
import com.example.MIS_Project.Service.InsuranceCompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/insurance-companies")
public class InsuranceCompanyController {

    @Autowired
    private InsuranceCompanyService insuranceCompanyService;

    @PostMapping
    public InsuranceCompany createInsuranceCompany(@RequestBody InsuranceCompany insuranceCompany) {
        return insuranceCompanyService.saveInsuranceCompany(insuranceCompany);
    }

    @GetMapping("/{id}")
    public InsuranceCompany getInsuranceCompany(@PathVariable String id) {
        return insuranceCompanyService.getInsuranceCompany(id);
    }

    @GetMapping
    public List<InsuranceCompany> getAllInsuranceCompanies() {
        return insuranceCompanyService.getAllInsuranceCompanies();
    }

    @DeleteMapping("/{id}")
    public void deleteInsuranceCompany(@PathVariable String id) {
        insuranceCompanyService.deleteInsuranceCompany(id);
    }
}
