import { Injectable } from '@angular/core';
import { Section } from './section.model';
import { SECTIONS } from './mock-sections';

@Injectable()
export class SectionsService {

  constructor() { }

  getSections() {
    return SECTIONS;
  }

}
