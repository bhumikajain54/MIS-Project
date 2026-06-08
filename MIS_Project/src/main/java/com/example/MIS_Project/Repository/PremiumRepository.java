package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.Premium;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PremiumRepository extends JpaRepository<Premium, Long> {
    // You can define custom queries here if necessary
}
