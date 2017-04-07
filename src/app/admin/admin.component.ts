import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  showAddForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickShow() {
    this.showAddForm = true;
  }

  resetForm() {
    this.showAddForm = false;
  }

}
