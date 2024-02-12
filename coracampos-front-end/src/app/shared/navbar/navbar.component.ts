import { Component } from '@angular/core';
import { ItemNavbar } from './interface/items.interface';
import $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



  itemsSocial: ItemNavbar[] = [
    {
      id: "1",
      icon: "bi bi-facebook",
      name: "Facebook",
      url: "https://www.facebook.com/Coracampos2000/"
    },
    {
      id: "2",
      icon: "bi bi-instagram",
      name: "Instragram",
      url: "https://www.instagram.com/coracampos2000/"
    },
  ];


  itemsNavbar: ItemNavbar[] = [
    {
      id: "1",
      icon: "bi bi-house",
      name: "Inicio",
      url: "/home"
    },
    {
      id: "2",
      icon: "bi bi-book",
      name: "Nosotros",
      url: "/about"
    },
    {
      id: "3",
      icon: "bi bi-info-square",
      name: "Contacto",
      url: "/contact"
    },
    {
      id: "4",
      icon: "bi bi-houses-fill",
      name: "Propiedades",
      url: "/properties"
    },
    {
      id: "5",
      icon: "bi bi-table",
      name: "Biodiversidad",
      url: "/bio"
    },
  ];

  openNav = () => {
    (document.getElementById("mySidenav") as HTMLElement).style.width = "250px";
  }


}
