package com.example.MIS_Project.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import jakarta.persistence.*;

@Entity
@Table(name = "ExcelExport")
public class ExcelExport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exportId", nullable = false, updatable = false)
    private Long exportId;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false, updatable = false)
    private LocalDateTime exportDate = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private DownloadStatus downloadStatus = DownloadStatus.PENDING;

    @ManyToOne
    @JoinColumn(
            name = "importId",
            referencedColumnName = "importId",
            foreignKey = @ForeignKey(name = "FK_ExcelExport_ExcelImport")
    )
    private ExcelImport excelImport;


    public Long getExportId() {
        return exportId;
    }

    public void setExportId(Long exportId) {
        this.exportId = exportId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public LocalDateTime getExportDate() {
        return exportDate;
    }

    public void setExportDate(LocalDateTime exportDate) {
        this.exportDate = exportDate;
    }

    public DownloadStatus getDownloadStatus() {
        return downloadStatus;
    }

    public void setDownloadStatus(DownloadStatus downloadStatus) {
        this.downloadStatus = downloadStatus;
    }

    public ExcelImport getExcelImport() {
        return excelImport;
    }

    public void setExcelImport(ExcelImport excelImport) {
        this.excelImport = excelImport;
    }


    public enum DownloadStatus {
        PENDING, COMPLETED, FAILED
    }
}
