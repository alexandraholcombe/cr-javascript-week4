import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  public warning: boolean = false;
  @Output() hideEdit = new EventEmitter();

  constructor(private musiciansService: MusiciansService,
    private sectionsService: SectionsService,
    private instrumentsService: InstrumentsService) { }

    ngOnInit() {
    }

    showWarning() {
      this.warning = true;
    }

    beginUpdatingMusician(musicianToUpdate){
      if (!musicianToUpdate.name || !musicianToUpdate.instrument || !musicianToUpdate.section || !musicianToUpdate.bio) {
        this.showWarning();
      } else {
        this.musiciansService.updateMusician(musicianToUpdate);
        this.closeForm();
      }
    }

    closeForm() {
      this.hideEdit.emit();
    }

  }
