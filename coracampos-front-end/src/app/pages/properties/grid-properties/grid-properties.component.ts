import { Component, OnInit } from '@angular/core';
import { Property } from '../interfaces/property.interface';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-grid-properties',
  templateUrl: './grid-properties.component.html',
  styleUrl: './grid-properties.component.scss'
})
export class GridPropertiesComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  properties!: Property[];

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => this.properties = data);
  }

}
