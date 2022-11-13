import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCarouselComponent } from './word-carousel.component';

describe('WordCarouselComponent', () => {
  let component: WordCarouselComponent;
  let fixture: ComponentFixture<WordCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
