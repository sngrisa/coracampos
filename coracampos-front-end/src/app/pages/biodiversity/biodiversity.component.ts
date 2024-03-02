import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BiodiversityService } from './services/biodiversity.service';
import { BiodiversityCard } from './interfaces/bioDiversity.interface';

@Component({
  selector: 'app-biodiversity',
  templateUrl: './biodiversity.component.html',
  styleUrl: './biodiversity.component.scss'
})
export class BiodiversityComponent implements OnInit, AfterViewInit {

  urlMercadoLibre: string = "https://inmuebles.mercadolibre.com.ar/_CustId_165236308";

  cardsBio!: BiodiversityCard[];

  @ViewChild('filterProperties') valueSelect!: any;

  constructor(private bioDiversityService: BiodiversityService) { }

  ngOnInit(): void {
    this.bioDiversityService.getBioDiversityProperties().subscribe((properties: BiodiversityCard[]) => {
      return this.cardsBio = properties;
    })
  }

  ngAfterViewInit(): void {
    this.bioDiversityService.getBioDiversityProperties().subscribe((properties: BiodiversityCard[]) => {
      return this.cardsBio = properties;
    })
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
        this.cardsBio.sort(this.compareByName);
        break;
      case '1':
        this.cardsBio.sort(this.compareByPrice);
        break;
      case '2':
        this.cardsBio.sort(this.compareByPrice).reverse();
        break;
    }

  }
}
