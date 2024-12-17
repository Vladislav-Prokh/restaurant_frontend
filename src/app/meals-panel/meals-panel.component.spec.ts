import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsPanelComponent } from './meals-panel.component';

describe('MealsPanelComponent', () => {
  let component: MealsPanelComponent;
  let fixture: ComponentFixture<MealsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
