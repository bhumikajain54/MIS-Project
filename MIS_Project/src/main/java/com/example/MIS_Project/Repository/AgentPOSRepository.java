package com.example.MIS_Project.Repository;
import com.example.MIS_Project.Model.AgentPOS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentPOSRepository extends JpaRepository<AgentPOS, String> {
}


