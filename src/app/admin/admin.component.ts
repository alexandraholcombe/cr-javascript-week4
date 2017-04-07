import { Component, OnInit } from '@angular/core';
import { Musician } from '../musician.model';
import { MusiciansService } from '../musicians.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MusiciansService]
})
export class AdminComponent implements OnInit {
  allMusicians: FirebaseListObservable<any[]>;
  showAddForm: boolean = false;

  constructor(private musiciansService: MusiciansService) { }

  ngOnInit() {
    this.allMusicians = this.musiciansService.getMusicians();
  }

  clickShow() {
    this.showAddForm = true;
  }

  resetForm() {
    this.showAddForm = false;
  }

}
