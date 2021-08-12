import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDPRODUCTComponent } from './addproduct.component';

describe('ADDPRODUCTComponent', () => {
  let component: ADDPRODUCTComponent;
  let fixture: ComponentFixture<ADDPRODUCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDPRODUCTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDPRODUCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
