import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientscheduleComponent } from './clientschedule.component';

describe('ClientscheduleComponent', () => {
  let component: ClientscheduleComponent;
  let fixture: ComponentFixture<ClientscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
