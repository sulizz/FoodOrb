import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendDetailsComponent } from './friendslist/friend-details/friend-details.component';
import { FriendsComponent } from './friendslist/friends/friends.component';
import { IndexComponent } from './index/index.component';
import { CartComponent } from './listing/home/cart/cart.component';
import { HomeComponent } from './listing/home/home.component';
import { TrackingComponent } from './ordering/tracking/tracking.component';
import { ForgetpasswordComponent } from './registration/forgetpassword/forgetpassword.component';
import { LoginComponent } from './registration/login/login.component';
import { ProfileComponent } from './registration/profile/profile.component';
import { RegisterComponent } from './registration/register/register.component';
import { SettingsComponent } from './registration/settings/settings.component';

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
    },{
        path:'home',
        component:HomeComponent
    },{
        path:'settings',
        component:SettingsComponent
    },{
        path:'tracking',
        component:TrackingComponent
    },{
        path:'friends',
        component:FriendsComponent
    },{
        path:'friend/:id',
        component:FriendDetailsComponent
    },{
        path:'profile',
        component:ProfileComponent
    },{
        path:'cart',
        component:CartComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
