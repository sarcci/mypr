import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolexamlistComponent } from './kolexamlist.component';

describe('KolexamlistComponent', () => {
  let component: KolexamlistComponent;
  let fixture: ComponentFixture<KolexamlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolexamlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KolexamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
