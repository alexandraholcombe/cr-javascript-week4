import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';

@Component({
  selector: 'app-delete-musician',
  templateUrl: './delete-musician.component.html',
  styleUrls: ['./delete-musician.component.scss'],
  providers: [MusiciansService]
})
export class DeleteMusicianComponent implements OnInit {
  @Input() musician: any;

  constructor(private musiciansService: MusiciansService
              ) { }

  ngOnInit() {
  }

}
