package com.example.MIS_Project.auth;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

@lombok.Data
@lombok.Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

  private String email;
  private String password;
}
