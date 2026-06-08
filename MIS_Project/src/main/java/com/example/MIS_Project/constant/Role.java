package com.example.MIS_Project.constant;

import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.example.MIS_Project.constant.Permission.*;

public enum Role {

    USER(
            Set.of(
                    CLIENT_READ,
                    CLIENT_DOWNLOAD
            )
    ),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_UPDATE,
                    ADMIN_CREATE,
                    ACCOUNT_MANAGER_READ,
                    ACCOUNT_MANAGER_UPDATE,
                    ACCOUNT_MANAGER_CREATE,
                    VP_READ,
                    VP_UPDATE,
                    VP_AUTHORITY,
                    AVP_READ,
                    AVP_UPDATE,
                    SRR_READ,
                    CHECKER_READ,
                    CHECKER_UPDATE,
                    CHECKER_AUTHORITY,
                    MAKE_ENTRY_READ,
                    MAKE_ENTRY_UPDATE,
                    MAKE_ENTRY_CASCADE
            )
    ),
    ACCOUNT_MANAGER(
            Set.of(
                    ACCOUNT_MANAGER_READ,
                    ACCOUNT_MANAGER_UPDATE,
                    ACCOUNT_MANAGER_CREATE
            )
    ),
    VP(
            Set.of(
                    VP_READ,
                    VP_UPDATE,
                    VP_AUTHORITY
            )
    ),
    AVP(
            Set.of(
                    AVP_READ,
                    AVP_UPDATE
            )
    ),
    SRR(
            Set.of(
                    SRR_READ
            )
    ),
    CHECKER(
            Set.of(
                    CHECKER_READ,
                    CHECKER_UPDATE,
                    CHECKER_AUTHORITY
            )
    ),
    MAKE_ENTRY(
            Set.of(
                    MAKE_ENTRY_READ,
                    MAKE_ENTRY_UPDATE,
                    MAKE_ENTRY_CASCADE
            )
    );

    @Getter
    private final Set<Permission> permissions;

    private Role(Set<Permission> permissions) {
        this.permissions = permissions;
    }

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = permissions
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
