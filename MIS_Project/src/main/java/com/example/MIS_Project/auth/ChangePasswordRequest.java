package com.example.MIS_Project.auth;



@lombok.Getter
@lombok.Setter
@lombok.Builder
public class ChangePasswordRequest {

    private String currentPassword;
    private String newPassword;
    private String confirmationPassword;

    public String getCurrentPassword() {
        return currentPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public String getConfirmationPassword() {
        return confirmationPassword;
    }
}
