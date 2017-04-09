import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { Section } from '../section.model';
import { Instrument } from '../instrument.model';
import { MusiciansService } from '../musicians.service';
import { SectionsService } from '../sections.service';
import { InstrumentsService } from '../instruments.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musician-list',
  templateUrl: './musician-list.component.html',
  styleUrls: ['./musician-list.component.scss'],
  providers: [MusiciansService,
              SectionsService,
              InstrumentsService]
})

export class MusicianListComponent implements OnInit {
  public allMusicians: FirebaseListObservable<any[]>;
  public currentRoute = this.router.url;
  public filterBySection = 'allMusicians';
  public filterByInstrument = 'allMusicians';
  public allSections: Section[];
  public allInstruments: Instrument[];

  constructor(
    private musiciansService: MusiciansService,
    private sectionsService: SectionsService,
    private instrumentsService: InstrumentsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.allMusicians = this.musiciansService.getMusicians();
    this.allSections = this.sectionsService.getSections();
    this.allInstruments = this.instrumentsService.getInstruments();
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

  setBorder() {
    if (this.currentRoute === '/admin') {
      return {'border': 'none !important'};
    }
  }

  onSectionChange(optionFromMenu) {
    this.filterBySection = optionFromMenu;
  }

  onInstrumentChange(optionFromMenu) {
    this.filterByInstrument = optionFromMenu;
  }
}
