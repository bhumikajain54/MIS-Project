package com.example.MIS_Project.Model;
import jakarta.persistence.*;

@Entity
public class Client {
    @Id
    private String clientName;
    private String emailId;
    private String mobileNumber;
    @Column(name = "Segment")
    @Enumerated(EnumType.STRING)
    private Segment segment;

    // Getters and Setters
    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Segment getSegment() {
        return segment;
    }

    public void setSegment(Segment segment) {
        this.segment = segment;
    }

    public enum Segment {
        Corporate, Individual
    }
}
