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
}
