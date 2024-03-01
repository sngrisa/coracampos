import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from './services/property.service';
import { PropertyComponent } from './property/property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertiesComponent } from './properties.component';
import { GridPropertiesComponent } from './grid-properties/grid-properties.component';
import { CardPropertyComponent } from './card-property/card-property.component';
import { HeadComponent } from './property/head/head.component';
import { CarrouselImgsComponent } from './property/carrousel-imgs/carrousel-imgs.component';
import { AppPropertiesRoutingModule } from './properties-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [
    PropertyComponent,
    PropertyDetailsComponent,
    PropertiesComponent,
    GridPropertiesComponent,
    CardPropertyComponent,
    HeadComponent,
    CarrouselImgsComponent,
    CardPropertyComponent
  ],
  imports: [
    CommonModule,
    AppPropertiesRoutingModule,
    RouterModule,
    PagesModule
  ],
  providers: [
    PropertyService,
  ],
  exports: [
    PropertyComponent,
    PropertiesComponent
  ]
})
export class PropertiesModule { }
