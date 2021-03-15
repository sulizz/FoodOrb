import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
    declarations: [
        HomeComponent,
        UsernavbarComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ], 
    exports:[
        HomeComponent,
        UsernavbarComponent,
        CartComponent
    ]
})
export class ListingModule { }
