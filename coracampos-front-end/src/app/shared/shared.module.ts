import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ItemsNavbarComponent } from './navbar/items-navbar/items-navbar.component';
import { LogoNavbarComponent } from './navbar/logoNavbar/logoNavbar.component';
import { ContactDetailsComponent } from './footer/contact-details/contact-details.component';
import { DetailsComponent } from './footer/contact-details/details/details.component';
import { MenuItemsComponent } from './footer/menu-items/menu-items.component';
import { LogoFooterComponent } from './footer/logoFooter/logo-footer.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ItemsNavbarComponent,
    LogoNavbarComponent,
    ContactDetailsComponent,
    DetailsComponent,
    MenuItemsComponent,
    LogoFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContactDetailsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
