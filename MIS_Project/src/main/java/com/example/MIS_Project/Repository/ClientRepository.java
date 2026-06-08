package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, String> {
    // Additional query methods (if needed) can be added here
}
