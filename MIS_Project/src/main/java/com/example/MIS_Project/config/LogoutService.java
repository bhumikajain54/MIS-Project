package com.example.MIS_Project.config;
import com.example.MIS_Project.token.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

  private final TokenRepository tokenRepository;

  @Override
  public void logout(
          HttpServletRequest request,
          HttpServletResponse response,
          Authentication authentication
  ) {
    final String authHeader = request.getHeader("Authorization");
    final String jwt;
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      return;
    }
    jwt = authHeader.substring(7);
    var storedToken = tokenRepository.findByToken(jwt)
            .orElse(null);
    if (storedToken != null) {
      storedToken.setExpired(true);  // Mark the token as expired
      storedToken.setRevoked(true);  // Mark the token as revoked
      tokenRepository.save(storedToken);  // Save the updated token
      SecurityContextHolder.clearContext();  // Clear the security context
    }
  }
}
