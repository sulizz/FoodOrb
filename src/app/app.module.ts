import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import {RegistrationModule} from './registration/registration.module';
import {ListingModule} from './listing/listing.module';
import {OrderingModule} from './ordering/ordering.module'
import {FriendslistModule} from './friendslist/friendslist.module'

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RegistrationModule,
    ListingModule,
    ReactiveFormsModule,
    OrderingModule,
    FriendslistModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
