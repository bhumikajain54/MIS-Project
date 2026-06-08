package com.example.MIS_Project.Repository;

import com.example.MIS_Project.Model.User;
import com.example.MIS_Project.constant.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  Optional<User> findByEmail(String email);
  boolean existsByRole(Role role);

}
