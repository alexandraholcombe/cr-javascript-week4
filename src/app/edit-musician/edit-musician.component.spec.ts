/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditMusicianComponent } from './edit-musician.component';

describe('EditMusicianComponent', () => {
  let component: EditMusicianComponent;
  let fixture: ComponentFixture<EditMusicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
