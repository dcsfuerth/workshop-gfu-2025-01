import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSpielwieseComponent } from './ngrx-spielwiese.component';

describe('NgrxSpielwieseComponent', () => {
  let component: NgrxSpielwieseComponent;
  let fixture: ComponentFixture<NgrxSpielwieseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgrxSpielwieseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxSpielwieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
