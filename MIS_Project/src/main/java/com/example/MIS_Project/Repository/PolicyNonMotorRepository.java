package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.PolicyNonMotor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyNonMotorRepository extends JpaRepository<PolicyNonMotor, Long> {
    // Custom query methods can be added here if needed
}
