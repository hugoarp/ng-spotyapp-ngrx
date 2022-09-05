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
import { environment } from '../environments/environment';

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
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
