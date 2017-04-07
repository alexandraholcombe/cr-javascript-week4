import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../musician.model';

@Component({
  selector: 'app-musician-tile',
  templateUrl: './musician-tile.component.html',
  styleUrls: ['./musician-tile.component.scss']
})
export class MusicianTileComponent implements OnInit {
  @Input() musician: Musician;

  constructor() { }

  ngOnInit() {
  }

}
