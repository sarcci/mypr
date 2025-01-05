import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewispComponent } from './newisp.component';

describe('NewispComponent', () => {
  let component: NewispComponent;
  let fixture: ComponentFixture<NewispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewispComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
