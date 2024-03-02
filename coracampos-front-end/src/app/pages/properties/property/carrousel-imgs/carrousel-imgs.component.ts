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
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      on: {
        init: function loopBagFix(swiper) {
          /* 1. Add a copy of the slides */
          const slides = swiper.slides
          const wrapper = swiper.wrapperEl
          slides.forEach((slide) => { wrapper.append(slide.cloneNode(true)) })

          /* 2. Remove the duplicated pagination */
          setTimeout(() => {
            const paginations = swiper.pagination.bullets
            paginations.forEach((pagination, index) => {
              if (index > (paginations.length / 2) - 1) {
                pagination.remove()
              }
            })
          }, 100)
        },
      },
      pagination: {
        el: '.property-single-carousel-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

}
