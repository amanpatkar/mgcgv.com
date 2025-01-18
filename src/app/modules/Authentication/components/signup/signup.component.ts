import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
constructor(private router:Router){}
registerData = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
};
  gotoSignIn(){
    this.router.navigate(['/login']);
  }
  submitForm(registerForm: any): void {
    if (registerForm.valid) {
      if (this.registerData.password !== this.registerData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Form Submitted Successfully', this.registerData);
      // Add API call logic here
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
