import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './properties/property/property.component';
import { BiodiversityComponent } from './biodiversity/biodiversity.component';
import { BiodiversitySingleComponent } from './biodiversity/biodiversity-single/biodiversity-single.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent,
    children: [
      { path: 'properties/:id', component: PropertyComponent },
    ]
  },
  {
    path: "bio", component: BiodiversityComponent,
    children: [
      { path: "bio/:id", component: BiodiversitySingleComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPageRoutingModule { }
