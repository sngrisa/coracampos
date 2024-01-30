import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';
import Swiper from 'swiper';


@Component({
  selector: 'app-carrousel-imgs',
  templateUrl: './carrousel-imgs.component.html',
  styleUrl: './carrousel-imgs.component.scss'
})
export class CarrouselImgsComponent implements OnInit {

  @Input() property!: Property | undefined;

  ngOnInit(): void {
    new Swiper('#property-single-carousel', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.property-single-carousel-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

}
