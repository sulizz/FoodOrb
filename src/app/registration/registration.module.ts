import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, NavbarComponent],
  imports: [
    CommonModule
  ], 
  exports:[
      RegisterComponent,
      LoginComponent,
      NavbarComponent
  ]
})
export class RegistrationModule { }
