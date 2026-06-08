package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.ExcelImport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExcelImportRepository extends JpaRepository<ExcelImport, Long> {
}
