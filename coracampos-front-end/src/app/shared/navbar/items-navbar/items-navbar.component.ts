import { Component, Input } from '@angular/core';
import { ItemNavbar } from '../interface/items.interface';

@Component({
  selector: 'app-items-navbar',
  templateUrl: './items-navbar.component.html',
  styleUrl: './items-navbar.component.scss'
})
export class ItemsNavbarComponent {

  @Input() itemNavbar!: ItemNavbar;

}
