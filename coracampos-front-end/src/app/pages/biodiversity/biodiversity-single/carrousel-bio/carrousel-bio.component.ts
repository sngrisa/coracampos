import { Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { BiodiversityCard } from '../../interfaces/bioDiversity.interface';

@Component({
  selector: 'app-carrousel-bio',
  templateUrl: './carrousel-bio.component.html',
  styleUrl: './carrousel-bio.component.scss'
})
export class CarrouselBioComponent implements OnInit {

  @Input() bioDetails!: BiodiversityCard | undefined;

  ngOnInit(): void {
    new Swiper('#property-single-carousel', {
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
