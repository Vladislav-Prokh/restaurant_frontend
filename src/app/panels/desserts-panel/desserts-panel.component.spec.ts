import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsPanelComponent } from './desserts-panel.component';

describe('DessertsPanelComponent', () => {
  let component: DessertsPanelComponent;
  let fixture: ComponentFixture<DessertsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
