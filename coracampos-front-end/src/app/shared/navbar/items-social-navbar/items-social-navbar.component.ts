import { Component, Input } from '@angular/core';
import { ItemNavbar } from '../interface/items.interface';

@Component({
  selector: 'app-items-social-navbar',
  templateUrl: './items-social-navbar.component.html',
  styleUrl: './items-social-navbar.component.scss'
})
export class ItemsSocialNavbarComponent {
  @Input() itemSocial!: ItemNavbar
  ;
}
