import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  selectedRole: string | null = null;
  constructor(private router:Router){}
  roles = [
    { name: 'Admin', image: '../../../../../assets/admin.png' },
    { name: 'Parent', image: '../../../../../assets/parent.png' },
    { name: 'Faculty', image: '../../../../../assets/faculty.png' },
    { name: 'Student', image: '../../../../../assets/student.png' },
  ];

  loginData:any = {
    email: '',
    password: '',
    role:''
  };
  isRoleSelected = false;
  getCheckStatus(item: any) {
    this.selectedRole = item.name;
    this.isRoleSelected = true;
  }

  submitForm(formData: NgForm) {
    console.log('Form Valid:', formData.valid);
    this.loginData.role = this.selectedRole;
    console.log('Form Submitted:', this.loginData);
    if(formData.valid){
      alert("submitted!!");
    }
  }
  gotoSignUp(){
    this.router.navigate(['/signup']);
  }
}
