import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sponsorship } from './sponsorship';

describe('Sponsorship', () => {
  let component: Sponsorship;
  let fixture: ComponentFixture<Sponsorship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sponsorship],
    }).compileComponents();

    fixture = TestBed.createComponent(Sponsorship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
