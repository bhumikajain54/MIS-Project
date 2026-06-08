package com.example.MIS_Project.token;

import com.example.MIS_Project.Model.User;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Token {

  @Id
  @GeneratedValue
  public Integer id;

  @Column(unique = true)
  public String token;

  @Enumerated(EnumType.STRING)
  @Builder.Default
  public TokenType tokenType = TokenType.BEARER;

  public boolean revoked;

  public boolean expired;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  public User user;
}
