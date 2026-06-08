package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.ExcelUpdates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExcelUpdatesRepository extends JpaRepository<ExcelUpdates, Long> {
    // Custom query to find Excel updates by policy number
    List<ExcelUpdates> findByPolicyNumber(String policyNumber);
}
