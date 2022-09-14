import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserButtonComponent } from './user-button.component';

describe('UserButtonComponent', () => {
  let component: UserButtonComponent;
  let fixture: ComponentFixture<UserButtonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserButtonComponent);
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
});
