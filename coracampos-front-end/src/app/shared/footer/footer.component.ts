import { Component } from '@angular/core';
import { MenuItems } from './interface/menuItem.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  itemsMenu: MenuItems[] = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: "bi bi-house",
    },
    {
      id: 2,
      name: "Nosotros",
      url: "/about",
      icon: "bi bi-book",
    },
    {
      id: 3,
      name: "Contacto",
      url: "/contact",
      icon: "bi bi-info-square",
    },
    {
      id: 4,
      icon: "bi bi-houses-fill",
      name: "Propiedades",
      url: "/properties"
    },
    {
      id: 5,
      icon: "bi bi-table",
      name: "Biodiversidad",
      url: "/bio"
    },
  ]

  getYear = () => {
    let data = new Date();
    return data.getFullYear();
  }

}
