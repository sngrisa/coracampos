import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { clientTestimonial } from '../interfaces/clients.interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements AfterViewInit {

  title: string = "Que dicen nuestros clientes?";

  clientTestimonials: clientTestimonial[] = [
    {
      desc: "Gracias, Corácampos, por el excelente trabajo. Siempre contrato su servicio. Tienen el mejor asesoramiento",
      imgUrl: "./../../../../../assets/carrousel/Image4.jpeg",
      avatar: "./../../../../../assets/avatars/avatar1.png",
      client: "Daniel Sanchez"
    },
    {
      desc: "Coracampos es un gran servicio para todo el mundo. Me gusta la manera de como ayudan a uno, cuando no sabe que propiedad adquirir.",
      imgUrl: "./../../../../../assets/carrousel/Image2.jpeg",
      avatar: "./../../../../../assets/avatars/avatar2.png",
      client: "Samantha Williams"
    },
    {
      desc: "Los mejores de Misiones. 100% recomendable!!!",
      imgUrl: "./../../../../../assets/carrousel/Image5.jpeg",
      avatar: "./../../../../../assets/avatars/avatar3.png",
      client: "Homero Lopez"
    }
  ]

  ngAfterViewInit(): void {
    new Swiper('#testimonial-carousel', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.testimonial-carousel-pagination',
        type: 'bullets',
        clickable: true
      }
    });

  }

}
