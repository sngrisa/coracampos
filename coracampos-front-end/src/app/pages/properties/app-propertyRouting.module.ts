import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties.component';
import { DetailsTechComponent } from './property/details-tech/details-tech.component';

const routes: Routes = [
  { path: "", component: PropertiesComponent },
  { path: ":id", component: PropertyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPropertyRoutingModule { }
