import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkolComponent } from './editkol.component';

describe('EditkolComponent', () => {
  let component: EditkolComponent;
  let fixture: ComponentFixture<EditkolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditkolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditkolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
