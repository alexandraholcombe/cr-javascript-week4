/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstrumentsService } from './instruments.service';

describe('InstrumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentsService]
    });
  });

  it('should ...', inject([InstrumentsService], (service: InstrumentsService) => {
    expect(service).toBeTruthy();
  }));
});
