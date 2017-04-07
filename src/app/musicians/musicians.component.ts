import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicians',
  templateUrl: './musicians.component.html',
  styleUrls: ['./musicians.component.scss']
})
export class MusiciansComponent implements OnInit {
  public title = 'Meet the Musicians';

  constructor() { }

  ngOnInit() {
  }

}
