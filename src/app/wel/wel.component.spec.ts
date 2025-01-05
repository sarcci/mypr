import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelComponent } from './wel.component';

describe('WelComponent', () => {
  let component: WelComponent;
  let fixture: ComponentFixture<WelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
