import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationShortcutComponent } from './reservation-shortcut.component';

describe('ReservationShortcutComponent', () => {
  let component: ReservationShortcutComponent;
  let fixture: ComponentFixture<ReservationShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationShortcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
