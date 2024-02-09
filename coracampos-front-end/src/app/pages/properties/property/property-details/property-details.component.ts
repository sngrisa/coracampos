import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss'
})
export class PropertyDetailsComponent {

  @Input() propertyDetails!: Property | undefined;

}



