import { ApiService } from './../api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceTsService } from '../auth.service.ts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';  // Change username to email
  password = '';
  errorMessage = '';

  showForgotPasswordModal = false;
  forgotStep = 1; // 1: Send OTP, 2: Reset Password with OTP
  accountEmail = '';
  recipientEmail = '';
  otpCode = '';
  newPassword = '';

  forgotPasswordSuccess = '';
  forgotPasswordError = '';
  isForgotPasswordLoading = false;

  constructor(private apiService: ApiService, private router: Router, private authService: AuthServiceTsService) {}

  onLogin() {
    const user = { email: this.username, password: this.password };  // Use email instead of username
    this.apiService.authenticate(user).subscribe(
      (user) => {
        localStorage.setItem("token", user.access_token);
        this.authService.setCurrentUser({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role
        });
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid email or password';  // Update error message
        console.error('Login error:', error);
      }
    );
  }

  openForgotPasswordModal() {
    this.accountEmail = this.username || '';
    this.recipientEmail = '';
    this.otpCode = '';
    this.newPassword = '';
    this.forgotStep = 1;
    this.forgotPasswordSuccess = '';
    this.forgotPasswordError = '';
    this.showForgotPasswordModal = true;
  }

  closeForgotPasswordModal() {
    this.showForgotPasswordModal = false;
    this.forgotPasswordSuccess = '';
    this.forgotPasswordError = '';
  }

  onSendOtp() {
    if (!this.accountEmail) {
      this.forgotPasswordError = 'Please enter your registered Account Email.';
      return;
    }

    this.isForgotPasswordLoading = true;
    this.forgotPasswordSuccess = '';
    this.forgotPasswordError = '';

    const payload = {
      email: this.accountEmail,
      recipientEmail: this.recipientEmail || this.accountEmail
    };

    this.apiService.forgotPassword(payload).subscribe(
      (res: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordSuccess = res?.message || 'OTP code sent successfully!';
        this.forgotStep = 2;
      },
      (error: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordError = error.error?.message || (typeof error.error === 'string' ? error.error : 'User with specified email address does not exist.');
        console.error('Forgot password error:', error);
      }
    );
  }

  onResetPasswordWithOtp() {
    if (!this.otpCode || !this.newPassword) {
      this.forgotPasswordError = 'Please enter both the OTP code and your new password.';
      return;
    }

    this.isForgotPasswordLoading = true;
    this.forgotPasswordSuccess = '';
    this.forgotPasswordError = '';

    const payload = {
      email: this.accountEmail,
      otp: this.otpCode,
      newPassword: this.newPassword
    };

    this.apiService.resetPasswordWithOtp(payload).subscribe(
      (res: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordSuccess = res?.message || 'Password reset successfully!';
        setTimeout(() => {
          this.closeForgotPasswordModal();
        }, 2000);
      },
      (error: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordError = error.error?.message || (typeof error.error === 'string' ? error.error : 'Invalid OTP or failed to reset password.');
        console.error('Reset password error:', error);
      }
    );
  }
}
