import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiodiversityService } from '../services/biodiversity.service';

@Component({
  selector: 'app-biodiversity-single',
  templateUrl: './biodiversity-single.component.html',
  styleUrl: './biodiversity-single.component.scss'
})
export class BiodiversitySingleComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private bioDiversityService: BiodiversityService) { }

  ngOnInit(): void {
    this.activatedRouter;
  }

}
