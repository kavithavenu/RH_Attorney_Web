import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientssortComponent } from './clientssort.component';

describe('ClientssortComponent', () => {
  let component: ClientssortComponent;
  let fixture: ComponentFixture<ClientssortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientssortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientssortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
