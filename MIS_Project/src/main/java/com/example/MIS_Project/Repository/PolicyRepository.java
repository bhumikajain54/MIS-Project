package com.example.MIS_Project.Repository;
import com.example.MIS_Project.Model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, String> {
    // Custom query to fetch all policy numbers
    @Query("SELECT p.policyNumber FROM Policy p")
    List<String> findAllPolicyNumbers();
    // Add custom query methods if needed, e.g.,
    // List<Policy> findByPaymentStatus(Policy.PaymentStatus status);
}


