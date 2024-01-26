import { Component } from '@angular/core';
import { ContactFooter } from '../interface/contactFooter.interface';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent {

  dataCoraCampos: ContactFooter =  {
    phone: "+54-376-4228886",
    email: "info@coracampos.com.ar",
    location: "Roque Perez 1615, 4to piso, Posadas, Misiones, Argentina"
  };

}
