import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GIconComponent } from './g-icon.component';

describe('GIconComponent', () => {
  let component: GIconComponent;
  let fixture: ComponentFixture<GIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GIconComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
