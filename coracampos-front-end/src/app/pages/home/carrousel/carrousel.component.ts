import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent implements AfterViewInit{

   itemsCarrousel: any[] = [
    {
      title:"¡CONOCEMOS EL VALOR DE LA TIERRA!",
      textdesc: "¿Estás buscando invertir?  ¡Tenemos varias Opciones que te van a interesar!  ",
      textButton: "Más información",
      background: "./../../../../../assets/carrousel/Image1.jpeg"
    },
    {
      title:"",
      textdesc: "",
      textButton: "",
      background: "./../../../../../assets/carrousel/Image2.jpeg"
    },
    {
      title:"",
      textdesc: "",
      textButton: "",
      background: "./../../../../../assets/carrousel/Image6.jpeg"
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

    /* new Swiper('#property-carousel', {
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
    }); */
  }

}
