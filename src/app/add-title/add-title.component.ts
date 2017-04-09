import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.scss'],
  providers: [MusiciansService]
})
export class AddTitleComponent implements OnInit {
  @Input() musician: any;
  @Output() hideTitle = new EventEmitter();

  constructor(private musiciansService: MusiciansService) { }

  ngOnInit() {
  }

  closeForm() {
    this.hideTitle.emit();
  }

  beginSavingTitle(musicianToUpdate){
    if (!musicianToUpdate.title) {
      musicianToUpdate.title = '';
    }
    this.musiciansService.updateTitle(musicianToUpdate);
    this.closeForm();
  }

  beginRemovingTitle(musicianToUpdate) {
    musicianToUpdate.title = '';
    this.musiciansService.updateTitle(musicianToUpdate);
    this.closeForm();
  }

}
