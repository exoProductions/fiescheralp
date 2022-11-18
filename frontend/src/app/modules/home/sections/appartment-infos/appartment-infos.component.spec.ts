import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartmentInfosComponent } from './appartment-infos.component';

describe('AppartmentInfosComponent', () => {
  let component: AppartmentInfosComponent;
  let fixture: ComponentFixture<AppartmentInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartmentInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppartmentInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
