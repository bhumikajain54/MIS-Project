package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.PolicyHealth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyHealthRepository extends JpaRepository<PolicyHealth, Long> {
    // Custom query methods (if needed) can be added here
}
