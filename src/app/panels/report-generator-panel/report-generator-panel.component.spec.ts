import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneratorPanelComponent } from './report-generator-panel.component';

describe('ReportGeneratorPanelComponent', () => {
  let component: ReportGeneratorPanelComponent;
  let fixture: ComponentFixture<ReportGeneratorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportGeneratorPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGeneratorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
