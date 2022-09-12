import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';

import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  let service: SpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        },
      ],
    });
    service = TestBed.inject(SpotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener el usuario actual', () => {
    service.getCurrentUser().subscribe((user) => {
      expect(user).toBeTruthy();
    });
  });

  it('debe obtener las recomendaciones', () => {
    service.getRecommendations().subscribe((tracks) => {
      expect(tracks).toBeTruthy();
    });
  });

  it('debe obtener los favoritos del usuario', () => {
    service.getUserFavorites().subscribe((tracks) => {
      expect(tracks).toBeTruthy();
    });
  });
});
