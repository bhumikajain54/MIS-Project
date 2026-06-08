package com.example.MIS_Project.Model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class PolicyLife {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber")
    private Policy policy;

    private String nomineeName;
    private String insuredName1;
    private Integer insuredAge1;
    private String insuredRelation1;
    private Date insuredDob1;

    // Getters and Setters
    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }

    public String getInsuredName1() {
        return insuredName1;
    }

    public void setInsuredName1(String insuredName1) {
        this.insuredName1 = insuredName1;
    }

    public Integer getInsuredAge1() {
        return insuredAge1;
    }

    public void setInsuredAge1(Integer insuredAge1) {
        this.insuredAge1 = insuredAge1;
    }

    public String getInsuredRelation1() {
        return insuredRelation1;
    }

    public void setInsuredRelation1(String insuredRelation1) {
        this.insuredRelation1 = insuredRelation1;
    }

    public Date getInsuredDob1() {
        return insuredDob1;
    }

    public void setInsuredDob1(Date insuredDob1) {
        this.insuredDob1 = insuredDob1;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Add other getters and setters for all fields...
}
