import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsSpielwieseComponent } from './rx-js-spielwiese.component';

describe('RxJsSpielwieseComponent', () => {
  let component: RxJsSpielwieseComponent;
  let fixture: ComponentFixture<RxJsSpielwieseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxJsSpielwieseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsSpielwieseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
