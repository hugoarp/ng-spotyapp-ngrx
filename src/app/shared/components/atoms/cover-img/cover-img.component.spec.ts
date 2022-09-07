import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverImgComponent } from './cover-img.component';

describe('CoverImgComponent', () => {
  let component: CoverImgComponent;
  let fixture: ComponentFixture<CoverImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoverImgComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoverImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
