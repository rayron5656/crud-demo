import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrouseComponent } from './add-crouse.component';

describe('AddCrouseComponent', () => {
  let component: AddCrouseComponent;
  let fixture: ComponentFixture<AddCrouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCrouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCrouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
