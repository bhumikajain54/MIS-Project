package com.example.MIS_Project.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;


@Entity
public class PolicyNonMotor {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber")
    private Policy policy;

    private BigDecimal od;
    private BigDecimal odDiscount;
    private BigDecimal totalOd;
    private BigDecimal terrorismPremium;
    private BigDecimal other;
    private BigDecimal tpPremium;

    // Getters and Setters
    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
