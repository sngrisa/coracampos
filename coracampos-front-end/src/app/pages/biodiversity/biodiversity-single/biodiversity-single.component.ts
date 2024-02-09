import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BiodiversityService } from '../services/biodiversity.service';
import { BiodiversityCard } from '../interfaces/bioDiversity.interface';

@Component({
  selector: 'app-biodiversity-single',
  templateUrl: './biodiversity-single.component.html',
  styleUrl: './biodiversity-single.component.scss'
})
export class BiodiversitySingleComponent implements OnInit {

  biodiversityDetails!: BiodiversityCard | undefined;

  constructor(private activatedRouter: ActivatedRoute, private bioDiversityService: BiodiversityService) { }

  ngOnInit(): void {
    event?.preventDefault();
    let id: number | string | any = this.activatedRouter.snapshot.paramMap.get('id');
    this.bioDiversityService.getBioDiversityProperties().subscribe((bioDetails: BiodiversityCard[]) => {
      return this.biodiversityDetails = bioDetails.find((bio: BiodiversityCard) => bio._id == id);
    })
  }
}
