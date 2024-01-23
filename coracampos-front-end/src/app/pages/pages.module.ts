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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AboutComponent
  ]
})
export class PagesModule { }
