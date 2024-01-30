import { Component, Input } from '@angular/core';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-details-tech',
  templateUrl: './details-tech.component.html',
  styleUrl: './details-tech.component.scss'
})
export class DetailsTechComponent {

  @Input() detailsTech!: Property | undefined;

}
