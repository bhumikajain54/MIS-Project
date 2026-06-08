package com.example.MIS_Project.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
public class PolicyMotor {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber")
    private Policy policy;

    private String vehicleNumber;
    private String chassisNumber;
    private String engineNumber;
    private String fuelType;
    private String make;
    private String model;
    private String variantName;
    private Integer yom; // Year of Manufacture
    private String ccGvw;
    private Integer seatingCapacity;
    private BigDecimal od;
    private BigDecimal odDiscount;
    private String addon;
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

    public String getVehicleNumber() {
        return vehicleNumber;
    }

    public void setVehicleNumber(String vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    public String getChassisNumber() {
        return chassisNumber;
    }

    public void setChassisNumber(String chassisNumber) {
        this.chassisNumber = chassisNumber;
    }

    public String getEngineNumber() {
        return engineNumber;
    }

    public void setEngineNumber(String engineNumber) {
        this.engineNumber = engineNumber;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getVariantName() {
        return variantName;
    }

    public void setVariantName(String variantName) {
        this.variantName = variantName;
    }

    public Integer getYom() {
        return yom;
    }

    public void setYom(Integer yom) {
        this.yom = yom;
    }

    public String getCcGvw() {
        return ccGvw;
    }

    public void setCcGvw(String ccGvw) {
        this.ccGvw = ccGvw;
    }

    public Integer getSeatingCapacity() {
        return seatingCapacity;
    }

    public void setSeatingCapacity(Integer seatingCapacity) {
        this.seatingCapacity = seatingCapacity;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
