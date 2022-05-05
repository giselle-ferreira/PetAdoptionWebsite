import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeAdoptingComponent } from './before-adopting.component';

describe('BeforeAdoptingComponent', () => {
  let component: BeforeAdoptingComponent;
  let fixture: ComponentFixture<BeforeAdoptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeAdoptingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeAdoptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
