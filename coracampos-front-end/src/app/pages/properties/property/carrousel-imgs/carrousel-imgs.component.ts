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
    let countImgs: number | any = this.property?.imgUrls.length;
    new Swiper('#biodiversity-single-carousel', {
      speed: 600,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      slidesPerGroupAuto: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      pagination: {
        el: '.property-single-carousel-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

}
