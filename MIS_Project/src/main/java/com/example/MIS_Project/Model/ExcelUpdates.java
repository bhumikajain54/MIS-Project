package com.example.MIS_Project.Model;

import jakarta.persistence.*;


import java.time.LocalDateTime;

@Entity
public class ExcelUpdates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long updateId;

    private String policyNumber;
    private String updatedBy;
    private LocalDateTime updateDate;

    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber", insertable = false, updatable = false)
    private Policy policy;

    public Long getUpdateId() {
        return updateId;
    }

    public void setUpdateId(Long updateId) {
        this.updateId = updateId;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }


    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public LocalDateTime getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDateTime updateDate) {
        this.updateDate = updateDate;
    }
}

