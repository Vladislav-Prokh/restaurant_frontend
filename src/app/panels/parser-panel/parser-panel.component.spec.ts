import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParserPanelComponent } from './parser-panel.component';

describe('ParserPanelComponent', () => {
  let component: ParserPanelComponent;
  let fixture: ComponentFixture<ParserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParserPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
