import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      console.log(this.changePasswordForm.value);
    }
  }

  // ✅ Properly defined the onCancel method
  onCancel() {
    console.log('Password change canceled');
    this.changePasswordForm.reset();
  }
}
