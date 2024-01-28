import { Component, Input } from '@angular/core';
import { Property } from '../interfaces/property.interface';

@Component({
  selector: 'app-card-property',
  templateUrl: './card-property.component.html',
  styleUrl: './card-property.component.scss'
})
export class CardPropertyComponent {

  @Input() property!: Property;

}
