import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking/tracking.component';
import {ListingModule} from '../listing/listing.module'


@NgModule({
    declarations: [TrackingComponent],
    imports: [
        CommonModule,
        ListingModule
    ], 
    exports:[
        TrackingComponent
    ]
})

export class OrderingModule { }
