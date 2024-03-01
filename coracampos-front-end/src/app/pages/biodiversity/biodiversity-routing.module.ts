import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodiversityComponent } from './biodiversity.component';
import { BiodiversitySingleComponent } from './biodiversity-single/biodiversity-single.component';


const routes: Routes = [
  {
    path: '',
    component: BiodiversityComponent
  },
  {
    path: ':id',
    component: BiodiversitySingleComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBioRoutingModule { }
