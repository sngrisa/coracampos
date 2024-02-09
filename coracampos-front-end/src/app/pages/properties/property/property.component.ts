import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { Property } from '../interfaces/property.interface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent implements OnInit {

  propertyDetails!: Property | undefined;

  constructor(private activateRouter: ActivatedRoute, private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params: ParamMap) => {
      let id: number | string | any = params.get('id');
      return this.propertyService.getProperties().subscribe((resp: Property[]) => {
        return this.propertyDetails = resp.find((item: Property) => item._id == id);
      })
    })
  }
}
