import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
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
    private musiciansService: MusiciansService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.musicianId = urlParameters['id'];
    });
    this.musicianToDisplay = this.musiciansService.getMusicianById(this.musicianId).subscribe(dataLastEmittedFromObserver => {
      this.musicianToDisplay = dataLastEmittedFromObserver;

      console.log(this.musicianToDisplay);
    });
  }
}
