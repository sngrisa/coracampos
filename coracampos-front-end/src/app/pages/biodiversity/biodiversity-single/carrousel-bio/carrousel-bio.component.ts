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
