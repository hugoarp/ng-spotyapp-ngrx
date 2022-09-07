import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { OrganismsModule } from './shared/components/organisms/organisms.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './core/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UserInfoEffects } from './core/store/user/user.effects';
import { RecommendedTracksInfoEffects } from './core/store/recommended/recommended.effects';
import { FavoritesTracksInfoEffects } from './core/store/favorites/favorites.effects';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OrganismsModule,
    HttpClientModule,
    RouterModule,
    HotToastModule.forRoot(),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([
      UserInfoEffects,
      RecommendedTracksInfoEffects,
      FavoritesTracksInfoEffects,
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
