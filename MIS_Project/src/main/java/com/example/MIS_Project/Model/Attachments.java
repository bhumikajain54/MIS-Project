package com.example.MIS_Project.Model;

import jakarta.persistence.*;

@Entity
public class Attachments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attachmentId;

    private String policyNumber;

    @Enumerated(EnumType.STRING)
    private DocumentType documentType;

    private String documentPath;

    @ManyToOne
    @JoinColumn(name = "policyNumber", referencedColumnName = "policyNumber", insertable = false, updatable = false)
    private Policy policy;

    public Long getAttachmentId() {
        return attachmentId;
    }

    public void setAttachmentId(Long attachmentId) {
        this.attachmentId = attachmentId;
    }

    public String getPolicyNumber() {
        return policyNumber;
    }

    public void setPolicyNumber(String policyNumber) {
        this.policyNumber = policyNumber;
    }

    public DocumentType getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentType documentType) {
        this.documentType = documentType;
    }

    public Policy getPolicy() {
        return policy;
    }

    public void setPolicy(Policy policy) {
        this.policy = policy;
    }

    public String getDocumentPath() {
        return documentPath;
    }

    public void setDocumentPath(String documentPath) {
        this.documentPath = documentPath;
    }

    public enum DocumentType {
        PAN, Aadhar, Policy_Document, Mandate
    }
}
