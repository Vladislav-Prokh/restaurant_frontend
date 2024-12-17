import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsAddFormComponent } from './meals-add-form.component';

describe('MealsAddFormComponent', () => {
  let component: MealsAddFormComponent;
  let fixture: ComponentFixture<MealsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
