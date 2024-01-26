import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './about/vision/vision.component';
import { VisionItemComponent } from './about/vision/vision-item/vision-item.component';
import { TextComponent } from './about/text/text.component';
import { DetailsInfoComponent } from './about/details-info/details-info.component';
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

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VisionComponent,
    VisionItemComponent,
    TextComponent,
    ImageComponent,
    ImageContactComponent,
    DetailsInfoComponent,
    FormComponent,
    NewsComponent,
    NewComponent,
    CarrouselComponent,
    ServicesComponent,
    ClientsComponent,
    ClientComponent,
    ServiceComponent,
    ItemCarrouselComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
