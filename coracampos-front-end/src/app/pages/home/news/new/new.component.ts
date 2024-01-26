import { Component, Input } from '@angular/core';
import { News } from '../../interfaces/news.interface';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {

  @Input() new!: News;

}
