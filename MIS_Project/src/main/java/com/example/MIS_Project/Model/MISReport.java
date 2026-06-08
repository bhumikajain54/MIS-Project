package com.example.MIS_Project.Model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "MIS_Report")
public class MISReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reportId;

    @Column(nullable = false, length = 255)
    private String reportName;

    @Column(nullable = false)
    private LocalDateTime reportGenerationDate;

    @Column(nullable = false, length = 255)
    private String emailRecipient;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(length = 50)
    private String policyNumber;

    public int getReportId() {
        return reportId;
    }

    public void setReportId(int reportId) {
        this.reportId = reportId;
    }

    public String getReportName() {
        return reportName;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public LocalDateTime getReportGenerationDate() {
        return reportGenerationDate;
    }

    public void setReportGenerationDate(LocalDateTime reportGenerationDate) {
        this.reportGenerationDate = reportGenerationDate;
    }

    public String getEmailRecipient() {
        return emailRecipient;
    }

    public void setEmailRecipient(String emailRecipient) {
        this.emailRecipient = emailRecipient;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    // Getters and Setters

    public enum Status {
        SENT, PENDING, FAILED
    }
}
