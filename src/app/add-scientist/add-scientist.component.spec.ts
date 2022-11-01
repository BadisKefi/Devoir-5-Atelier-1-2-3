import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScientistComponent } from './add-scientist.component';

describe('AddScientistComponent', () => {
  let component: AddScientistComponent;
  let fixture: ComponentFixture<AddScientistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScientistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScientistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
