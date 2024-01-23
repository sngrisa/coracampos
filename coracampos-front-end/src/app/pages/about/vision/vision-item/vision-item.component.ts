import { Component, Input } from '@angular/core';
import { VisionItem } from '../../interface/aboutItem.interface';

@Component({
  selector: 'app-vision-item',
  templateUrl: './vision-item.component.html',
  styleUrl: './vision-item.component.scss'
})
export class VisionItemComponent {
  
  @Input() visionItem!: VisionItem;

}
