import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddretailerComponent } from './addretailer.component';

describe('AddretailerComponent', () => {
  let component: AddretailerComponent;
  let fixture: ComponentFixture<AddretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddretailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
