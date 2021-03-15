import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SettingsComponent } from './settings/settings.component';
import {ListingModule} from '../listing/listing.module';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent, 
        NavbarComponent, 
        ForgetpasswordComponent,
        SettingsComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ListingModule
    ], 
    exports:[
        RegisterComponent,
        LoginComponent,
        NavbarComponent,
        SettingsComponent
    ]
})
export class RegistrationModule { }
