import { Component, Input } from '@angular/core';
import { BiodiversityCard } from '../interfaces/bioDiversity.interface';

@Component({
  selector: 'app-cards-bio',
  templateUrl: './cardsbio.component.html',
  styleUrl: './cardsbio.component.scss'
})
export class CardsBioComponent {

  @Input() biodiversityCard!: BiodiversityCard;

}
