package com.example.MIS_Project.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;

@lombok.Data
@lombok.Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

  @JsonProperty("access_token")
  private String accessToken;
  @JsonProperty("refresh_token")
  private String refreshToken;

  private String firstname;
  private String lastname;
  private String email;
  private String role;
}
