import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss'],
  providers: [MusiciansService]
})

export class MusicianListComponent implements OnInit {
  allMusicians: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(
    private musiciansService: MusiciansService,
    private router: Router
  ) { }

  ngOnInit() {
    this.allMusicians = this.musiciansService.getMusicians();
  }

  setDisplay() {
    if (this.currentRoute === '/admin'){
      return 'block';
    } else {
      return 'flex';
    }
  }

  setTileDisplay() {
    if (this.currentRoute === '/admin'){
      return 'block';
    }
  }
}
