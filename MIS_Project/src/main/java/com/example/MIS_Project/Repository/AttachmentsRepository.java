package com.example.MIS_Project.Repository;
import com.example.MIS_Project.Model.Attachments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttachmentsRepository extends JpaRepository<Attachments, Long> {
    // Custom query to fetch all attachments for a specific policy number
    List<Attachments> findByPolicyNumber(String policyNumber);
}

