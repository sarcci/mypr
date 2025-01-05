import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditispComponent } from './editisp.component';

describe('EditispComponent', () => {
  let component: EditispComponent;
  let fixture: ComponentFixture<EditispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditispComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
