import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TextComponent } from './about/text/text.component';
import { FormComponent } from './contact/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './about/image/image.component';
import { NewsComponent } from './home/news/news.component';
import { NewComponent } from './home/news/new/new.component';
import { CarrouselComponent } from './home/carrousel/carrousel.component';
import { ServicesComponent } from './home/services/services.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ClientComponent } from './home/clients/client/client.component';
import { ServiceComponent } from './home/services/service/service.component';
import { ItemCarrouselComponent } from './home/carrousel/item-carrousel/item-carrousel.component';
import { IntroAboutComponent } from './about/intro-about/intro-about.component';
import { CarrouselAboutComponent } from './about/carrousel-about/carrousel-about.component';
import { RouterModule } from '@angular/router';
import { DetailsCoraComponent } from './contact/details-cora/details-cora.component';
import { MapCoraComponent } from './contact/map-cora/map-cora.component';
import { TextCoraComponent } from './contact/text-cora/text-cora.component';
import { SocialItemsComponent } from './contact/details-cora/social-items/social-items.component';
import { PropertiesComponent } from './properties/properties.component';
import { GridPropertiesComponent } from './properties/grid-properties/grid-properties.component';
import { CardPropertyComponent } from './properties/card-property/card-property.component';
import { PropertyService } from './properties/services/property.service';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyDetailsComponent } from './properties/property/property-details/property-details.component';
import { AppPropertyRoutingModule } from './properties/app-propertyRouting.module';
import { CarrouselImgsComponent } from './properties/property/carrousel-imgs/carrousel-imgs.component';
import { HeadComponent } from './properties/property/head/head.component';
import { DetailsTechComponent } from './properties/property/details-tech/details-tech.component';
import { BiodiversityComponent } from './biodiversity/biodiversity.component';
import { BiodiversitySingleComponent } from './biodiversity/biodiversity-single/biodiversity-single.component';
import { CardsBioComponent } from './biodiversity/cards/cardsbio.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeadComponent,
    ContactComponent,
    TextComponent,
    DetailsTechComponent,
    ImageComponent,
    FormComponent,
    NewsComponent,
    NewComponent,
    CarrouselComponent,
    ServicesComponent,
    ClientsComponent,
    ClientComponent,
    ServiceComponent,
    ItemCarrouselComponent,
    IntroAboutComponent,
    CarrouselAboutComponent,
    DetailsCoraComponent,
    MapCoraComponent,
    TextCoraComponent,
    SocialItemsComponent,
    PropertiesComponent,
    GridPropertiesComponent,
    CardPropertyComponent,
    PropertyComponent,
    PropertyDetailsComponent,
    CarrouselImgsComponent,
    BiodiversityComponent,
    BiodiversitySingleComponent,
    CardsBioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AppPropertyRoutingModule
  ],
  providers: [
    PropertyService
  ],
  exports: [
    AboutComponent,
  ]
})
export class PagesModule { }
