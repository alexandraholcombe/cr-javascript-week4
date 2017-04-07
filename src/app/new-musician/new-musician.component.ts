import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { InstrumentsService } from '../instruments.service';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-new-musician',
  templateUrl: './new-musician.component.html',
  styleUrls: ['./new-musician.component.scss'],
  providers: [MusiciansService, InstrumentsService, SectionsService]
})
export class NewMusicianComponent implements OnInit {
  constructor(private musiciansService: MusiciansService, private instrumentsService: InstrumentsService, private sectionsService: SectionsService) { }

  public allInstruments = this.instrumentsService.getInstruments();
  public allSections = this.sectionsService.getSections();

  ngOnInit() {
  }

  submitNewMusician(name: string, instrument: string, section: string, bio: string) {
    var newMusician: Musician = new Musician(name, instrument, section, bio);
    console.log(section);
    console.log(instrument);
    this.musiciansService.addMusician(newMusician);
  }

}
