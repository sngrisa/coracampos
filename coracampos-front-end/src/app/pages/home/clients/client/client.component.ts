import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { clientTestimonial } from '../../interfaces/clients.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {

  @Input() client!: clientTestimonial;

}
