import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrouselBioComponent } from './biodiversity-single/carrousel-bio/carrousel-bio.component';
import { BiodiversityComponent } from './biodiversity.component';
import { BiodiversitySingleComponent } from './biodiversity-single/biodiversity-single.component';
import { BiodiversityDetailsComponent } from './biodiversity-single/biodiversity-details/biodiversity-details.component';
import { CardsBioComponent } from './cards/cardsbio.component';
import { BiodiversityService } from './services/biodiversity.service';
import { AppBioRoutingModule } from './biodiversity-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        CarrouselBioComponent,
        BiodiversityComponent,
        BiodiversitySingleComponent,
        BiodiversityDetailsComponent,
        CardsBioComponent
    ],
    imports: [
        CommonModule,
        AppBioRoutingModule,
        RouterModule
    ],
    providers: [
        BiodiversityService
    ],
    exports: [
        BiodiversityComponent,
        BiodiversitySingleComponent
    ]
})
export class BiodiversityModule { }