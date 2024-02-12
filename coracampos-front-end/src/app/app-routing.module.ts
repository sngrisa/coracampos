import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "properties", loadChildren: () => import('./pages/properties/properties.module').then((properties) => properties.PropertiesModule) },
  { path: "bio", loadChildren: () => import('./pages/biodiversity/biodiversity.module').then((bio) => bio.BiodiversityModule) },
  { path: "**", redirectTo: 'home', pathMatch: 'full' },
  { path: " ", redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
