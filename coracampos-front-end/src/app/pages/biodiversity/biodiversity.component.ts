import { Component, OnInit } from '@angular/core';
import { BiodiversityService } from './services/biodiversity.service';
import { BiodiversityCard } from './interfaces/bioDiversity.interface';

@Component({
  selector: 'app-biodiversity',
  templateUrl: './biodiversity.component.html',
  styleUrl: './biodiversity.component.scss'
})
export class BiodiversityComponent implements OnInit {

  urlMercadoLibre: string = "https://inmuebles.mercadolibre.com.ar/_CustId_165236308";

  cardsBio!: BiodiversityCard[];

  constructor(private bioDiversityService: BiodiversityService) { }

  ngOnInit(): void {
    this.bioDiversityService.getBioDiversityProperties().subscribe((properties: BiodiversityCard[]) => {
      return this.cardsBio = properties;
    })
  }



}
