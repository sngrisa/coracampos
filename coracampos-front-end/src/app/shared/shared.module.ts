import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsNavbarComponent } from './navbar/items-navbar/items-navbar.component';
import { ItemsSocialNavbarComponent } from './navbar/items-social-navbar/items-social-navbar.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './navbar/logo/logo.component';
import { MenuItemsComponent } from './footer/menu-items/menu-items.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ItemsNavbarComponent,
    ItemsSocialNavbarComponent,
    LogoComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
