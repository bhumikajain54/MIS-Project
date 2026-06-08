package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.OCRData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OCRDataRepository extends JpaRepository<OCRData, Long> {
    // Custom query to find OCRData entries by policy number
    List<OCRData> findByPolicyNumber(String policyNumber);
}
