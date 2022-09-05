import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { OrganismsModule } from 'src/app/shared/components/organisms/organisms.module';
import { HomeComponent } from './page/home.component';
import { MoleculesModule } from 'src/app/shared/components/molecules/molecules.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OrganismsModule,
    MoleculesModule,
    RouterModule,
  ],
})
export class HomeModule {}
