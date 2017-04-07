import { Injectable } from '@angular/core';
import { Musician } from './musician.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MusiciansService {
  musicians: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.musicians = angularFire.database.list('musicians')
  }

  getMusicians() {
    return this.musicians;
  }

}
