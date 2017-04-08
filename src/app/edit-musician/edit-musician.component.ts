import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { InstrumentsService } from '../instruments.service';
import { SectionsService } from '../sections.service';

@Component({
  selector: 'app-edit-musician',
  templateUrl: './edit-musician.component.html',
  styleUrls: ['./edit-musician.component.scss'],
  providers: [MusiciansService, InstrumentsService, SectionsService]
})
export class EditMusicianComponent implements OnInit {
  @Input() musician: any;
  public allInstruments = this.instrumentsService.getInstruments();
  public allSections = this.sectionsService.getSections();

  constructor(private musiciansService: MusiciansService,
              private sectionsService: SectionsService,
              private instrumentsService: InstrumentsService) { }

  ngOnInit() {
  }

}
