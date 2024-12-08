import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchesComponent } from './lunches.component';

describe('LunchesComponent', () => {
  let component: LunchesComponent;
  let fixture: ComponentFixture<LunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
