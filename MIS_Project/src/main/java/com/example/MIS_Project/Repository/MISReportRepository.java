package com.example.MIS_Project.Repository;
import com.example.MIS_Project.Model.MISReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MISReportRepository extends JpaRepository<MISReport, Integer> {
}

