import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('filterProperties') valueSelect!: any;

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => this.properties = data);
  }

  ngAfterView(): void {
    this.propertyService.getProperties().subscribe((data: Property[]) => this.properties = data);
  }


  compareByName = (a: any, b: any) => {
    if (a.title < b.title) { return -1 }
    return (a.title > b.title) ? 1 : 0;
  }


  compareByPrice = (a: any, b: any) => {
    if (a.price < b.price) { return -1 }
    return (a.price > b.price) ? 1 : 0;
  }

  orderProperties = () => {
    switch (this.valueSelect.nativeElement.value) {
      case '3':
        this.properties.sort(this.compareByName);
        break;
      case '1':
        this.properties.sort(this.compareByPrice);
        break;
      case '2':
        this.properties.sort(this.compareByPrice).reverse();
        break;
    }
  }



}
