import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  firstname = '';
  lastname = '';
  email = '';
  password = '';
  role = 'USER';
  errorMessage = '';
  successMessage = '';

  availableRoles = [
    { value: 'USER', label: 'User' },
    { value: 'ADMIN', label: 'Admin' },
    { value: 'ACCOUNT_MANAGER', label: 'Account Manager' },
    { value: 'VP', label: 'VP' },
    { value: 'AVP', label: 'AVP' },
    { value: 'SRR', label: 'SRR' },
    { value: 'CHECKER', label: 'Checker' },
    { value: 'MAKE_ENTRY', label: 'Make Entry' }
  ];

  constructor(private apiService: ApiService, private router: Router) {}

  onRegister() {
    const user = { 
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email, 
      password: this.password,
      role: this.role
    };

    this.apiService.register(user).subscribe({
      next: (response) => {
        this.errorMessage = '';
        this.successMessage = 'Email ID registered successfully!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // Wait 2 seconds before redirecting
      },
      error: (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else if (error.error && typeof error.error === 'string') {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = 'Registration failed. Please try again.';
        }
        this.successMessage = '';
        console.error('Registration error:', error);
      }
    });
  }
}
