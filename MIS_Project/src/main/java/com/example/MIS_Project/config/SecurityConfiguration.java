package com.example.MIS_Project.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.config.Customizer;

import static com.example.MIS_Project.constant.Permission.*;
import static com.example.MIS_Project.constant.Role.*;
import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

        private static final String[] WHITE_LIST_URL = { "/api/v1/auth/**",
                        "/v2/api-docs",
                        "/v3/api-docs",
                        "/v3/api-docs/**",
                        "/swagger-resources",
                        "/swagger-resources/**",
                        "/configuration/ui",
                        "/configuration/security",
                        "/swagger-ui/**",
                        "/webjars/**",
                        "/swagger-ui.html",
                        "/api/v1/users/**",
                        "/api/v1/clients/**",
                        "/api/v1/agentpos/**",
                        "/api/v1/policies/**" };
        private final JwtAuthenticationFilter jwtAuthFilter;
        private final AuthenticationProvider authenticationProvider;
        private final LogoutHandler logoutHandler;

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                http
                                .cors(Customizer.withDefaults())
                                .csrf(AbstractHttpConfigurer::disable)
                                .authorizeHttpRequests(req -> req.requestMatchers(WHITE_LIST_URL)
                                                .permitAll()
                                                .requestMatchers("/api/v1/**")
                                                .hasAnyRole(ADMIN.name(), ACCOUNT_MANAGER.name(), VP.name(), AVP.name(),
                                                                SRR.name(), CHECKER.name(), MAKE_ENTRY.name())
                                                .requestMatchers(GET, "/api/v1/**")
                                                .hasAnyAuthority(CLIENT_READ.getPermission(),
                                                                ADMIN_READ.getPermission(),
                                                                ACCOUNT_MANAGER_READ.getPermission(),
                                                                VP_READ.getPermission(), AVP_READ.getPermission(),
                                                                SRR_READ.getPermission(), CHECKER_READ.getPermission(),
                                                                MAKE_ENTRY_READ.getPermission())
                                                .requestMatchers(POST, "/api/v1/**")
                                                .hasAnyAuthority(ADMIN_CREATE.getPermission(),
                                                                ACCOUNT_MANAGER_CREATE.getPermission(),
                                                                MAKE_ENTRY_CASCADE.getPermission())
                                                .requestMatchers(PUT, "/api/v1/**")
                                                .hasAnyAuthority(ADMIN_UPDATE.getPermission(),
                                                                ACCOUNT_MANAGER_UPDATE.getPermission(),
                                                                VP_UPDATE.getPermission(), AVP_UPDATE.getPermission(),
                                                                CHECKER_UPDATE.getPermission(),
                                                                MAKE_ENTRY_UPDATE.getPermission())
                                                .requestMatchers("/api/v1/**")
                                                .hasAnyRole(ADMIN.name(), ACCOUNT_MANAGER.name(), VP.name(), AVP.name(),
                                                                SRR.name(), CHECKER.name(), MAKE_ENTRY.name(),
                                                                USER.name())
                                                .anyRequest()
                                                .authenticated())
                                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                                .authenticationProvider(authenticationProvider)
                                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                                .logout(logout -> logout.logoutUrl("/api/v1/auth/logout")
                                                .addLogoutHandler(logoutHandler)
                                                .logoutSuccessHandler((request, response,
                                                                authentication) -> SecurityContextHolder
                                                                                .clearContext()));

                return http.build();
        }
}
