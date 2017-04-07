import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss'],
  providers: [MusiciansService]
})

export class MusicianListComponent implements OnInit {
  allMusicians: FirebaseListObservable<any[]>;

  constructor(
    private musiciansService: MusiciansService
  ) { }

  ngOnInit() {
    this.allMusicians = this.musiciansService.getMusicians();
  }
}
