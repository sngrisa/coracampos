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

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TextComponent,
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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
  ],
  exports: [
    AboutComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
