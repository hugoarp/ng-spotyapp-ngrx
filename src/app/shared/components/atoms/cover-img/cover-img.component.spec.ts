import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverImgComponent } from './cover-img.component';

describe('CoverImgComponent', () => {
  let component: CoverImgComponent;
  let fixture: ComponentFixture<CoverImgComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe de tener una imagen con src y alt', () => {
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.src).toBeTruthy();
    expect(img?.alt).toBeTruthy();
  });
  
  test('debe recibir un valor de tipo string en el input cover', () => {
    const cover = 'https://picsum.photos/id/237/200/300';
    component.cover = cover;
    fixture.detectChanges();
    const img = compiled.querySelector('img');
    expect(img?.src).toBe(cover);
  })
});
