package com.example.MIS_Project.Model;

import jakarta.persistence.*;

@Entity
public class Insurer {

    @Id
    private String insurerName;
    private String insurerBranchNameCode;

    @ManyToOne
    @JoinColumn(name = "insurance_company_id")
    private InsuranceCompany insuranceCompany;

    // Getters and Setters
    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
    }

    public String getInsurerBranchNameCode() {
        return insurerBranchNameCode;
    }

    public void setInsurerBranchNameCode(String insurerBranchNameCode) {
        this.insurerBranchNameCode = insurerBranchNameCode;
    }

    public InsuranceCompany getInsuranceCompany() {
        return insuranceCompany;
    }

    public void setInsuranceCompany(InsuranceCompany insuranceCompany) {
        this.insuranceCompany = insuranceCompany;
    }
}
