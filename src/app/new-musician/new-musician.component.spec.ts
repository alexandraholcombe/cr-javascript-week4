/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewMusicianComponent } from './new-musician.component';

describe('NewMusicianComponent', () => {
  let component: NewMusicianComponent;
  let fixture: ComponentFixture<NewMusicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMusicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
