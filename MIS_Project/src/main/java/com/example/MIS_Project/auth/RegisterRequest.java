package com.example.MIS_Project.auth;
import com.example.MIS_Project.constant.Role;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

@lombok.Data
@lombok.Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String firstname;
  private String lastname;
  private String email;
  private String password;
  private Role role;
}
