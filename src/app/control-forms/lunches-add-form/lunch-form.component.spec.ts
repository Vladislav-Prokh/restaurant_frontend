import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchFromComponent } from './lunch-form.component';

describe('LunchFromComponent', () => {
  let component: LunchFromComponent;
  let fixture: ComponentFixture<LunchFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunchFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
