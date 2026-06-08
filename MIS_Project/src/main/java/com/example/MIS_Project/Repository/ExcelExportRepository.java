package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.ExcelExport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExcelExportRepository extends JpaRepository<ExcelExport, Long> {
    List<ExcelExport> findByExcelImport_ImportId(Long importId);
    // You can add custom query methods if needed
}
