package com.example.MIS_Project.Model;
import jakarta.persistence.*;
import java.time.LocalDateTime;


@Entity
@Table(name = "ExcelImport")
public class ExcelImport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "importId", nullable = false, updatable = false)
    private Long importId;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false, updatable = false)
    private LocalDateTime importDate = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UploadStatus uploadStatus = UploadStatus.PENDING;


    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public LocalDateTime getImportDate() {
        return importDate;
    }

    public void setImportDate(LocalDateTime importDate) {
        this.importDate = importDate;
    }

    public UploadStatus getUploadStatus() {
        return uploadStatus;
    }

    public void setUploadStatus(UploadStatus uploadStatus) {
        this.uploadStatus = uploadStatus;
    }

    public Long getImportId() {
        return importId;
    }

    public void setImportId(Long importId) {
        this.importId = importId;
    }


    public enum UploadStatus {
        PENDING, COMPLETED, FAILED
    }
}
