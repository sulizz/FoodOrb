import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, NavbarComponent, ForgetpasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports:[
      RegisterComponent,
      LoginComponent,
      NavbarComponent
  ]
})
export class RegistrationModule { }
