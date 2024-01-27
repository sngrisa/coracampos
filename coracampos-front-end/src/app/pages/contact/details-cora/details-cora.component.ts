import { Component } from '@angular/core';

@Component({
  selector: 'app-details-cora',
  templateUrl: './details-cora.component.html',
  styleUrl: './details-cora.component.scss'
})
export class DetailsCoraComponent {

  email: string = "info@coracampos.com.ar";
  phone: string = "+54-376-4228886";
  address: string = "Roque Perez 1615, 4to piso. Posadas, Misiones";

  socialItems: any[] = 
  [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/Coracampos2000/?locale=es_LA",
      icon: "bi bi-facebook",
      class:"link-one text-primary"
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/coracampos2000/?hl=es",
      icon: "bi bi-instagram",
      class:"link-one text-danger"
    }
  ]

}
