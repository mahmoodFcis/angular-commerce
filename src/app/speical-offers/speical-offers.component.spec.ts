import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeicalOffersComponent } from './speical-offers.component';

describe('SpeicalOffersComponent', () => {
  let component: SpeicalOffersComponent;
  let fixture: ComponentFixture<SpeicalOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeicalOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeicalOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
