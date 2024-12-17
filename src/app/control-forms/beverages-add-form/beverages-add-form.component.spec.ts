import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesAddFormComponent } from './beverages-add-form.component';

describe('BeveragesAddFormComponent', () => {
  let component: BeveragesAddFormComponent;
  let fixture: ComponentFixture<BeveragesAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
