import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-items',
  templateUrl: './social-items.component.html',
  styleUrl: './social-items.component.scss'
})
export class SocialItemsComponent {

  @Input() itemSocial!: any;

}
