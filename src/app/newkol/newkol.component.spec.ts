import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewkolComponent } from './newkol.component';

describe('NewkolComponent', () => {
  let component: NewkolComponent;
  let fixture: ComponentFixture<NewkolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewkolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewkolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
