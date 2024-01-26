import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-carrousel',
  templateUrl: './item-carrousel.component.html',
  styleUrl: './item-carrousel.component.scss'
})
export class ItemCarrouselComponent {

  @Input() itemCarrousel!: any;

}
