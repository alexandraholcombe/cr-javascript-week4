import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';

@Component({
  selector: 'app-new-musician',
  templateUrl: './new-musician.component.html',
  styleUrls: ['./new-musician.component.scss'],
  providers: [MusiciansService]
})
export class NewMusicianComponent implements OnInit {

  constructor(private musiciansService: MusiciansService) { }

  ngOnInit() {
  }

  submitNewMusician(name: string, instrument: string, section: string, bio: string) {
    var newMusician: Musician = new Musician(name, instrument, section, bio);
    console.log(section);
    console.log(instrument);
    this.musiciansService.addMusician(newMusician);
  }

  public instruments: string[] = [
    "First Violin",
    "Second Violin",
    "Viola",
    "Cello",
    "Bass",
    "Flute",
    "Oboe",
    "Clarinet",
    "Bassoon",
    "Horn",
    "Trumpet",
    "Trombone",
    "Tuba",
    "Percussion",
    "Harp"
  ]
  public sections: string[] = [
    "Strings",
    "Woodwinds",
    "Brass",
    "Percussion"
  ]
}
