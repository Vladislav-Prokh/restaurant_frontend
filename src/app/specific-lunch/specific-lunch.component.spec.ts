import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificLunchComponent } from './specific-lunch.component';

describe('SpecificLunchComponent', () => {
  let component: SpecificLunchComponent;
  let fixture: ComponentFixture<SpecificLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificLunchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
