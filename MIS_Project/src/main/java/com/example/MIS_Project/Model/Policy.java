package com.example.MIS_Project.Model;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


@Entity
public class Policy {
    @Id
    private String policyNumber;
    private Date businessMonth;
    private Date misDataEntryDate;
    private Date policyStartDate;
    private Date policyExpiryDate;
    private Date policyBookingDate;
    private String planName;
    @Enumerated(EnumType.STRING)
    @Column(name = "LOB_Type")
    private LOBType lobType;// Enum: Health, Motor, NonMotor, Life
    private String clientName;
    private String insurerName;
    private String agentPosCode1;
    private String agentPosCode2;
    private BigDecimal netPremium;
    private BigDecimal grossPremium;
    private BigDecimal sumInsured;
    private String paymentMode;
    @Enumerated(EnumType.STRING)
    @Column(name = "Payment_Status")
    private PaymentStatus paymentStatus;// Enum: Paid/Unpaid
    private BigDecimal brokeragePercentage;
    private BigDecimal brokerageAmount;
    @Enumerated(EnumType.STRING)
    @Column(name = "Brokerage_Status")
    private BrokerageStatus brokerageStatus; // Enum: Recd/Not Recd
    private String invoiceNo;
    private BigDecimal pospPercentage;
    private BigDecimal pospAmount;

    // Relationships
    @ManyToOne
    @JoinColumn(name = "clientName", insertable = false, updatable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "insurerName", insertable = false, updatable = false)
    private Insurer insurer;

    @ManyToOne
    @JoinColumn(name = "agentPosNameCode1", referencedColumnName = "agentPosNameCode1", insertable = false, updatable = false)
    private AgentPOS agentPos1;

    @ManyToOne
    @JoinColumn(name = "agentPosNameCode2", insertable = false, updatable = false)
    private AgentPOS agentPos2;

    @OneToMany(mappedBy = "policyNumber", cascade = CascadeType.ALL)
    private List<MISReport> misReports;
    private String policyName;

    // Getters and Setters
    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public Date getBusinessMonth() {
        return businessMonth;
    }

    public void setBusinessMonth(Date businessMonth) {
        this.businessMonth = businessMonth;
    }

    public Date getMisDataEntryDate() {
        return misDataEntryDate;
    }

    public void setMisDataEntryDate(Date misDataEntryDate) {
        this.misDataEntryDate = misDataEntryDate;
    }

    public Date getPolicyStartDate() {
        return policyStartDate;
    }

    public void setPolicyStartDate(Date policyStartDate) {
        this.policyStartDate = policyStartDate;
    }

    public Date getPolicyExpiryDate() {
        return policyExpiryDate;
    }

    public void setPolicyExpiryDate(Date policyExpiryDate) {
        this.policyExpiryDate = policyExpiryDate;
    }

    public Date getPolicyBookingDate() {
        return policyBookingDate;
    }

    public void setPolicyBookingDate(Date policyBookingDate) {
        this.policyBookingDate = policyBookingDate;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }



    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getInsurerName() {
        return insurerName;
    }

    public void setInsurerName(String insurerName) {
        this.insurerName = insurerName;
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

    public BigDecimal getSumInsured() {
        return sumInsured;
    }

    public void setSumInsured(BigDecimal sumInsured) {
        this.sumInsured = sumInsured;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }


    public BigDecimal getBrokeragePercentage() {
        return brokeragePercentage;
    }

    public void setBrokeragePercentage(BigDecimal brokeragePercentage) {
        this.brokeragePercentage = brokeragePercentage;
    }

    public BigDecimal getBrokerageAmount() {
        return brokerageAmount;
    }

    public void setBrokerageAmount(BigDecimal brokerageAmount) {
        this.brokerageAmount = brokerageAmount;
    }



    public String getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(String invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public BigDecimal getPospPercentage() {
        return pospPercentage;
    }

    public void setPospPercentage(BigDecimal pospPercentage) {
        this.pospPercentage = pospPercentage;
    }

    public BigDecimal getPospAmount() {
        return pospAmount;
    }

    public void setPospAmount(BigDecimal pospAmount) {
        this.pospAmount = pospAmount;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Insurer getInsurer() {
        return insurer;
    }

    public void setInsurer(Insurer insurer) {
        this.insurer = insurer;
    }


    public LOBType getLobType() {
        return lobType;
    }

    public void setLobType(LOBType lobType) {
        this.lobType = lobType;
    }

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public BrokerageStatus getBrokerageStatus() {
        return brokerageStatus;
    }

    public void setBrokerageStatus(BrokerageStatus brokerageStatus) {
        this.brokerageStatus = brokerageStatus;
    }

    public AgentPOS getAgentPos1() {
        return agentPos1;
    }

    public void setAgentPos1(AgentPOS agentPos1) {
        this.agentPos1 = agentPos1;
    }

    public AgentPOS getAgentPos2() {
        return agentPos2;
    }

    public void setAgentPos2(AgentPOS agentPos2) {
        this.agentPos2 = agentPos2;
    }

    public String getAgentPosCode1() {
        return agentPosCode1;
    }

    public void setAgentPosCode1(String agentPosCode1) {
        this.agentPosCode1 = agentPosCode1;
    }

    public String getAgentPosCode2() {
        return agentPosCode2;
    }

    public void setAgentPosCode2(String agentPosCode2) {
        this.agentPosCode2 = agentPosCode2;
    }

    public List<MISReport> getMisReports() {
        return misReports;
    }

    public void setMisReports(List<MISReport> misReports) {
        this.misReports = misReports;
    }

    public String getPolicyName() {
        return policyName;
    }

    public void setPolicyName(String policyName) {
        this.policyName = policyName;
    }


    public enum LOBType {
        HEALTH,
        MOTOR,
        NONMOTOR,
        LIFE
    }

    public enum PaymentStatus {
        PAID,
        UNPAID
    }

    public enum BrokerageStatus {
        RECD,
        NOT_RECD
    }
}