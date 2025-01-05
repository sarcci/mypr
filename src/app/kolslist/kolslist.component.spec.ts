import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolslistComponent } from './kolslist.component';

describe('KolslistComponent', () => {
  let component: KolslistComponent;
  let fixture: ComponentFixture<KolslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
