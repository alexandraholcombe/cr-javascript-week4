import { Injectable } from '@angular/core';
import { Instrument } from './instrument.model';
import { INSTRUMENTS } from './mock-instruments';

@Injectable()
export class InstrumentsService {

  constructor() { }

  getInstruments() {
    return INSTRUMENTS;
  }

}
