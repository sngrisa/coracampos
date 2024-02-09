import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyComponent } from './pages/properties/property/property.component';
import { BiodiversitySingleComponent } from './pages/biodiversity/biodiversity-single/biodiversity-single.component';
import { BiodiversityComponent } from './pages/biodiversity/biodiversity.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "properties", loadChildren: () => import('./pages/pages.module').then((p) => p.PagesModule) },
  { path: "**", redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
