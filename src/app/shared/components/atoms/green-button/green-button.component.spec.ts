import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreenButtonComponent } from './green-button.component';

describe('GreenButtonComponent', () => {
  let component: GreenButtonComponent;
  let fixture: ComponentFixture<GreenButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GreenButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe recibir un valor de tipo string en el input label', () => {
    const label = 'Hola Mundo';
    component.label = label;
    fixture.detectChanges();
    const button = compiled.querySelector('button');
    expect(button?.textContent).toBe(label);
  });
});
