/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusiciansService } from './musicians.service';

describe('MusiciansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusiciansService]
    });
  });

  it('should ...', inject([MusiciansService], (service: MusiciansService) => {
    expect(service).toBeTruthy();
  }));
});
