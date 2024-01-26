import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  @Input() service!: any;

}
