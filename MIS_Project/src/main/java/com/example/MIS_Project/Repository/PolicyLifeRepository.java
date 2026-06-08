package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.PolicyLife;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyLifeRepository extends JpaRepository<PolicyLife, Long> {
    // You can add custom queries here if needed.
}
