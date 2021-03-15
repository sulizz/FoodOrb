import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';


@NgModule({
    declarations: [
        HomeComponent,
        UsernavbarComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ], 
    exports:[
        HomeComponent,
        UsernavbarComponent
    ]
})
export class ListingModule { }
