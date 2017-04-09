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

  getMusicianById(musicianId: number) {
    return this.angularFire.database.object('musicians/' + musicianId);
  }

  addMusician(musicianToAdd: Musician) {
    this.musicians.push(musicianToAdd);
  }

  updateMusician(localUpdatedMusician){
    var musicianEntryInFirebase = this.getMusicianById(localUpdatedMusician.$key);
    musicianEntryInFirebase.update({name: localUpdatedMusician.name,
      instrument: localUpdatedMusician.instrument,
      section: localUpdatedMusician.section,
      bio: localUpdatedMusician.bio});
  }

  deleteMusician(musicianToDelete) {
    var musicianEntryInFirebase = this.getMusicianById(musicianToDelete.$key);
    musicianEntryInFirebase.remove();
  }

}
