package com.example.MIS_Project.constant;

public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    CLIENT_READ("client:read"),
    CLIENT_DOWNLOAD("client:download"),
    ACCOUNT_MANAGER_READ("account_manager:read"),
    ACCOUNT_MANAGER_UPDATE("account_manager:update"),
    ACCOUNT_MANAGER_CREATE("account_manager:create"),
    VP_READ("vp:read"),
    VP_UPDATE("vp:update"),
    VP_AUTHORITY("vp:authority"),
    AVP_READ("avp:read"),
    AVP_UPDATE("avp:update"),
    SRR_READ("srr:read"),
    CHECKER_READ("checker:read"),
    CHECKER_UPDATE("checker:update"),
    CHECKER_AUTHORITY("checker:authority"),
    MAKE_ENTRY_CASCADE("make_entry:cascade"),
    MAKE_ENTRY_READ("make_entry:read"),
    MAKE_ENTRY_UPDATE("make_entry:update");

    private final String permission;

    private Permission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
