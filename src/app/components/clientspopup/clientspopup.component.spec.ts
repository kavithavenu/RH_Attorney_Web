import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientspopupComponent } from './clientspopup.component';

describe('ClientspopupComponent', () => {
  let component: ClientspopupComponent;
  let fixture: ComponentFixture<ClientspopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientspopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
