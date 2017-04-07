import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MusicianService } from '../musician.service';

@Component({
  selector: 'musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss'],
  providers: [MusicianService]
})
export class MusicianListComponent implements OnInit {
  allMusicians: FirebaseListObservable<any[]>;

  constructor(private musicianService: MusicianService) { }

  ngOnInit() {
    this.allMusicians = this.musicianService.getMusicians();
  }

}
