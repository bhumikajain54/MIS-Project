package com.example.MIS_Project.Model;

import jakarta.persistence.*;


import java.time.LocalDateTime;

@Entity
public class OCRData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ocrId;

    private String policyNumber;
    private String extractedText;
    private LocalDateTime processedDate;
    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber", insertable = false, updatable = false)
    private Policy policy;

    public Long getOcrId() {
        return ocrId;
    }

    public void setOcrId(Long ocrId) {
        this.ocrId = ocrId;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public String getExtractedText() {
        return extractedText;
    }

    public void setExtractedText(String extractedText) {
        this.extractedText = extractedText;
    }



    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public LocalDateTime getProcessedDate() {
        return processedDate;
    }

    public void setProcessedDate(LocalDateTime processedDate) {
        this.processedDate = processedDate;
    }
}

