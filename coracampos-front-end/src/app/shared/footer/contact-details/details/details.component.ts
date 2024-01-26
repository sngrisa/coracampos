import { Component, Input } from '@angular/core';
import { ContactFooter } from '../../interface/contactFooter.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  @Input() detail!: ContactFooter;

}
