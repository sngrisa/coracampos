import { Component, Input } from '@angular/core';
import { BiodiversityCard } from '../../interfaces/bioDiversity.interface';

@Component({
  selector: 'app-biodiversity-details',
  templateUrl: './biodiversity-details.component.html',
  styleUrl: './biodiversity-details.component.scss'
})
export class BiodiversityDetailsComponent {

  @Input() bioDetails!: BiodiversityCard | undefined;

}
