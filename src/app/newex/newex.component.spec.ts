import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexComponent } from './newex.component';

describe('NewexComponent', () => {
  let component: NewexComponent;
  let fixture: ComponentFixture<NewexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
