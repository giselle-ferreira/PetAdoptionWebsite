import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCarouselComponent } from './ngo-carousel.component';

describe('NgoCarouselComponent', () => {
  let component: NgoCarouselComponent;
  let fixture: ComponentFixture<NgoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
