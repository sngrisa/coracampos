import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PropertyDetails } from '../interfaces/property.interface';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent implements OnInit {

  propertyDetails: any = {};

  constructor(private activateRouter: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params: ParamMap) => {
      let id: any = params.get('id');
      return this.propertyService.getPropetyById(id).subscribe((resp: any) => {
        this.propertyDetails = resp;
      })
    });
  }



}
