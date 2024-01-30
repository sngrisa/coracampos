import { Component, Input } from '@angular/core';
import { Property } from '../../interfaces/property.interface';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {

  @Input() detail!: Property | undefined;

}
