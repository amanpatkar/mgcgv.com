import { Routes } from '@angular/router';
import { LoginComponent } from './modules/Authentication/components/login/login.component';
import { SignupComponent } from './modules/Authentication/components/signup/signup.component';

export const routes: Routes = [
    {path:'login' ,component:LoginComponent},
    {path:'signup',component:SignupComponent}
];
