import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IspCrudComponent } from './isp-crud.component';

describe('IspCrudComponent', () => {
  let component: IspCrudComponent;
  let fixture: ComponentFixture<IspCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IspCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IspCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
