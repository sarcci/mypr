import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkolexamComponent } from './newkolexam.component';

describe('NewkolexamComponent', () => {
  let component: NewkolexamComponent;
  let fixture: ComponentFixture<NewkolexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewkolexamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewkolexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
