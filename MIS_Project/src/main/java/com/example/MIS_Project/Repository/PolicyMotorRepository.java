package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.PolicyMotor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyMotorRepository extends JpaRepository<PolicyMotor, Long> {
    // Custom query methods can be added here if needed
}
