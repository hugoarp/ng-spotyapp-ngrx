import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListComponent } from './track-list.component';

describe('TrackListComponent', () => {
  let component: TrackListComponent;
  let fixture: ComponentFixture<TrackListComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackListComponent);
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

  test('debe emitir el evento favoriteEvent', () => {
    const track = {
      cover: 'cover',
      title: 'title',
      description: 'description',
      id: '1',
      favorite: false,
    };

    component.favoriteEvent.subscribe((trackInfo) => {
      expect(trackInfo).toEqual(track);
    });

    component.emitFavoriteEvent(track);
  });
});
