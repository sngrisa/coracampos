import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyComponent } from './property/property.component';
import { PropertiesComponent } from './properties.component';

const routes: Routes = [
  { path: "", component: PropertiesComponent },
  { path: ":id", component: PropertyComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPropertyRoutingModule { }
