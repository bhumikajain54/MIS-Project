package com.example.MIS_Project.Controller;
import com.example.MIS_Project.Service.AuthenticationService;
import com.example.MIS_Project.auth.AuthenticationRequest;
import com.example.MIS_Project.auth.AuthenticationResponse;
import com.example.MIS_Project.auth.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  @PostMapping("/register")
  public ResponseEntity<AuthenticationResponse> register(
      @RequestBody RegisterRequest request
  ) {
    return ResponseEntity.ok(service.register(request));
  }
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @PostMapping("/refresh-token")
  public void refreshToken(
      HttpServletRequest request,
      HttpServletResponse response
  ) throws IOException {
    service.refreshToken(request, response);
  }

  @PostMapping("/forgot-password")
  public ResponseEntity<?> forgotPassword(
      @RequestBody com.example.MIS_Project.auth.ForgotPasswordRequest request
  ) {
    return ResponseEntity.ok(service.forgotPassword(request));
  }

  @PostMapping("/reset-password-otp")
  public ResponseEntity<?> resetPasswordWithOtp(
      @RequestBody com.example.MIS_Project.auth.ResetPasswordRequest request
  ) {
    return ResponseEntity.ok(service.resetPasswordWithOtp(request));
  }
}
