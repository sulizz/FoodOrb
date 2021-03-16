import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { CartComponent } from './home/cart/cart.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        HomeComponent,
        UsernavbarComponent,
        CartComponent,
        
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ], 
    exports:[
        HomeComponent,
        UsernavbarComponent,
        
    ]
})
export class ListingModule { }
