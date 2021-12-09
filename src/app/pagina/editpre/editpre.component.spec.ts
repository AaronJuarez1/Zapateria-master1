import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpreComponent } from './editpre.component';

describe('EditpreComponent', () => {
  let component: EditpreComponent;
  let fixture: ComponentFixture<EditpreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
