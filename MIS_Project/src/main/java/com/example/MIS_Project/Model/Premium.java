package com.example.MIS_Project.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class Premium {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long premiumId;

    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber")
    private Policy policy;

    private BigDecimal netPremium;
    private BigDecimal grossPremium;
    private BigDecimal od;
    private BigDecimal odDiscount;
    private String addon;
    private BigDecimal totalOd;
    private BigDecimal terrorismPremium;
    private BigDecimal other;
    private BigDecimal tpPremium;

    // Getters and Setters
    public Long getPremiumId() {
        return premiumId;
    }

    public void setPremiumId(Long premiumId) {
        this.premiumId = premiumId;
    }

    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public BigDecimal getNetPremium() {
        return netPremium;
    }

    public void setNetPremium(BigDecimal netPremium) {
        this.netPremium = netPremium;
    }

    public BigDecimal getGrossPremium() {
        return grossPremium;
    }

    public void setGrossPremium(BigDecimal grossPremium) {
        this.grossPremium = grossPremium;
    }

    public BigDecimal getOd() {
        return od;
    }

    public void setOd(BigDecimal od) {
        this.od = od;
    }

    public BigDecimal getOdDiscount() {
        return odDiscount;
    }

    public void setOdDiscount(BigDecimal odDiscount) {
        this.odDiscount = odDiscount;
    }

    public String getAddon() {
        return addon;
    }

    public void setAddon(String addon) {
        this.addon = addon;
    }

    public BigDecimal getTotalOd() {
        return totalOd;
    }

    public void setTotalOd(BigDecimal totalOd) {
        this.totalOd = totalOd;
    }

    public BigDecimal getTerrorismPremium() {
        return terrorismPremium;
    }

    public void setTerrorismPremium(BigDecimal terrorismPremium) {
        this.terrorismPremium = terrorismPremium;
    }

    public BigDecimal getOther() {
        return other;
    }

    public void setOther(BigDecimal other) {
        this.other = other;
    }

    public BigDecimal getTpPremium() {
        return tpPremium;
    }

    public void setTpPremium(BigDecimal tpPremium) {
        this.tpPremium = tpPremium;
    }

    // Add other getters and setters for all fields...
}
