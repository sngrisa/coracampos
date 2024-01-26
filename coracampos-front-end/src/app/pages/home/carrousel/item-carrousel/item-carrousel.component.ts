import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { ItemCarrousel } from './interfaces/itemsCarrousel.interface';

@Component({
  selector: 'app-item-carrousel',
  templateUrl: './item-carrousel.component.html',
  styleUrl: './item-carrousel.component.scss'
})
export class ItemCarrouselComponent implements AfterViewInit {


  itemsCarrousel: ItemCarrousel[] = [
    {
      title: "¡CONOCEMOS EL VALOR DE LA TIERRA!",
      textdesc: "¿Estás buscando invertir?  ¡Tenemos varias Opciones que te van a interesar!",
      textButton: "Más información",
      background: "./../../../../../assets/carrousel/Image1.jpeg"
    },
    {
      title: "¿Estas buscando invertir?",
      textdesc: "TE AYUDAMOS A ENCONTRAR LA PROPIEDAD QUE BUSCAS",
      textButton: "Dejanos tu consulta aquí",
      background: "./../../../../../assets/carrousel/Image2.jpeg"
    },
    {
      title: "¡Publicidad PREMIUM!!",
      textdesc: "¡Con nosotros tu propiedad es visible en todo el PAÍS, contamos con publicidad PREMIUM en todos los portales!",
      textButton: "Consultenos",
      background: "./../../../../../assets/carrousel/Image6.jpg"
    }
  ];


  ngAfterViewInit(): void {
    new Swiper('.intro-carousel', {
      speed: 500,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    new Swiper('#property-carousel', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.propery-carousel-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    })
  }


}
