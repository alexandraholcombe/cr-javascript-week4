import { Component, OnInit, Input } from '@angular/core';
import { Musician } from '../musician.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musician-tile',
  templateUrl: './musician-tile.component.html',
  styleUrls: ['./musician-tile.component.scss']
})
export class MusicianTileComponent implements OnInit {
  @Input() musician: Musician;
  public currentRoute: string = this.router.url;
  public editing: boolean = false;
  public deleting: boolean = false;
  public titling: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  truncateBio(str: string) {
    var limit = 300;
    var trimmable = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF';
    var reg = new RegExp('(?=[' + trimmable + '])');
    var words = str.split(reg);
    var count = 0;
    return words.filter(function(word) {
      count += word.length;
      return count <= limit;
    }).join('') + this.countBio(count, limit);
  }

  countBio(count, limit) {
    if (count > limit) {
      return '...';
    } else {
      return '';
    }
  }

  goToDetail(clickedMusician: any) {
    this.router.navigate(['musicians', clickedMusician.$key]);
  }

  showComp(variableToChange) {
    if (variableToChange === 'editing') {
      this.editing = true;
      this.deleting = false;
      this.titling = false;
    } else if (variableToChange === 'deleting') {
      this.deleting = true;
      this.editing = false;
      this.titling = false;
    } else if (variableToChange === 'titling') {
      this.titling = true;
      this.editing = false;
      this.deleting = false;
    }
  }

  hideComp(variableToChange) {
    if (variableToChange === 'editing') {
      this.editing = false;
    } else if (variableToChange === 'deleting') {
      this.deleting = false;
    } else if (variableToChange === 'titling') {
      this.titling = false;
    }
  }
}
