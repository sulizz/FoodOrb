import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ForgetpasswordComponent } from './registration/forgetpassword/forgetpassword.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';

const routes: Routes = [
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'index',
        component:IndexComponent
    },
    {
        path: '', 
        redirectTo: 'index', 
        pathMatch: 'full'
    },
    {
        path:'password/reset',
        component:ForgetpasswordComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
