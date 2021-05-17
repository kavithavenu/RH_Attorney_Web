import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationResultsComponent } from './consultation-results.component';

describe('ConsultationResultsComponent', () => {
  let component: ConsultationResultsComponent;
  let fixture: ComponentFixture<ConsultationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
