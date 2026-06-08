package com.example.MIS_Project.Model;
import jakarta.persistence.*;


@Entity
public class InsuranceCompany {
    @Id
    @Column(name = "Insurance_Company_ID")
    private String insuranceCompanyId;
    private String insuranceCompanyName;

    // Getters and Setters
    public String getInsuranceCompanyName() {
        return insuranceCompanyName;
    }

    public void setInsuranceCompanyName(String insuranceCompanyName) {
        this.insuranceCompanyName = insuranceCompanyName;
    }

    public String getInsuranceCompanyId() {
        return insuranceCompanyId;
    }

    public void setInsuranceCompanyId(String insuranceCompanyId) {
        this.insuranceCompanyId = insuranceCompanyId;
    }
}
