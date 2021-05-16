import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenclientmatterComponent } from './openclientmatter.component';

describe('OpenclientmatterComponent', () => {
  let component: OpenclientmatterComponent;
  let fixture: ComponentFixture<OpenclientmatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenclientmatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenclientmatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
