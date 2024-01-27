import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TextComponent } from './about/text/text.component';
import { FormComponent } from './contact/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageContactComponent } from './contact/image/imageContact.component';
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

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TextComponent,
    ImageComponent,
    ImageContactComponent,
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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
