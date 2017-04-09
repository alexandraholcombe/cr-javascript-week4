import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { Section } from '../section.model';
import { Instrument } from '../instrument.model';
import { MusiciansService } from '../musicians.service';
import { SectionsService } from '../sections.service';
import { InstrumentsService } from '../instruments.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MusiciansService,
              SectionsService,
              InstrumentsService]
})
export class AdminComponent implements OnInit {
  public allMusicians: FirebaseListObservable<any[]>;
  public filterBySection = 'allSections';
  public filterByInstrument = 'allInstruments';
  public allSections: Section[];
  public allInstruments: Instrument[];
  public showAddForm = false;

  constructor(
    private musiciansService: MusiciansService,
    private sectionsService: SectionsService,
    private instrumentsService: InstrumentsService
  ) { }

  ngOnInit() {
    this.allMusicians = this.musiciansService.getMusicians();
    this.allSections = this.sectionsService.getSections();
    this.allInstruments = this.instrumentsService.getInstruments();
  }

  clickShow() {
    this.showAddForm = true;
  }

  resetForm() {
    this.showAddForm = false;
  }

  onSectionChange(optionFromMenu) {
    this.filterBySection = optionFromMenu;
  }

  onInstrumentChange(optionFromMenu) {
    this.filterByInstrument = optionFromMenu;
  }

}
