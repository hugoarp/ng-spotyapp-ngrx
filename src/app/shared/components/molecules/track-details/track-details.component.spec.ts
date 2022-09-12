import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackDetailsComponent } from './track-details.component';

describe('TrackDetailsComponent', () => {
  let component: TrackDetailsComponent;
  let fixture: ComponentFixture<TrackDetailsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('debe emitir el evento favoriteEvent con el track al hacer click en botón de favorito', () => {
    const spy = jest.spyOn(component.favoriteEvent, 'emit');
    const button = fixture.nativeElement.querySelector('i');
    button.click();
    expect(spy).toHaveBeenCalledWith(component.track);
  });
});
