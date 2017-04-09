import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { InstrumentsService } from '../instruments.service';
import { SectionsService } from '../sections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-musician',
  templateUrl: './new-musician.component.html',
  styleUrls: ['./new-musician.component.scss'],
  providers: [MusiciansService, InstrumentsService, SectionsService]
})
export class NewMusicianComponent implements OnInit {
  @Output() resetForm = new EventEmitter();

  constructor(
    private musiciansService: MusiciansService,
    private instrumentsService: InstrumentsService,
    private sectionsService: SectionsService,
    private router: Router
  ) { }

  public allInstruments = this.instrumentsService.getInstruments();
  public allSections = this.sectionsService.getSections();
  public warning: boolean = false;

  ngOnInit() {
  }

  showWarning() {
    this.warning = true;
  }

  closeForm() {
    this.resetForm.emit();
  }

  submitNewMusician(name: string, instrument: string, section: string, bio: string) {
    if (!name || !bio){
      this.showWarning();
    } else {
      var newMusician: Musician = new Musician(name, instrument, section, bio);
      this.musiciansService.addMusician(newMusician);
      this.resetForm.emit();
      this.router.navigate(['admin']);
    }
  }

}
