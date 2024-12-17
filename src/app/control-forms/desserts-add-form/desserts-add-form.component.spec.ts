import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsAddFormComponent } from './desserts-add-form.component';

describe('DessertsAddFormComponent', () => {
  let component: DessertsAddFormComponent;
  let fixture: ComponentFixture<DessertsAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertsAddFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
