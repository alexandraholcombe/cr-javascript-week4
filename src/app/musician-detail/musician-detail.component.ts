import { Component, OnInit } from '@angular/core';
import { Musician } from '../fundraiser.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { MusiciansService } from '../musicians.service';

@Component({
  selector: 'app-musician-detail',
  templateUrl: './musician-detail.component.html',
  styleUrls: ['./musician-detail.component.scss'],
  providers: [MusiciansService]

})
export class MusicianDetailComponent implements OnInit {
  musicianId;
  musicianToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private musiciansService: musiciansService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.musicianId = urlParameters['id'];
    });
    this.musicianToDisplay = this.musiciansService.getMusicianById(this.musicianId);
  }
}

export class FundraiserDetailComponent implements OnInit {
  fundraiserId: number = null;
  fundraiserToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundraisersService: FundraisersService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundraiserId = urlParameters['id'];
    });
    this.fundraiserToDisplay = this.fundraisersService.getFundraiserById(this.fundraiserId);
  }

}
