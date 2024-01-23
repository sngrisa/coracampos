import { Component, Input } from '@angular/core';
import { MenuItems } from '../interface/menuItem.interface';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {

  @Input() itemMenu!: MenuItems;

}
