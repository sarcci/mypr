import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditkolexamComponent } from './editkolexam.component';

describe('EditkolexamComponent', () => {
  let component: EditkolexamComponent;
  let fixture: ComponentFixture<EditkolexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditkolexamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditkolexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
