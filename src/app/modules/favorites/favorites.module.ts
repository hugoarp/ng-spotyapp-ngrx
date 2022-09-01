import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './page/favorites.component';
import { OrganismsModule } from 'src/app/shared/components/organisms/organisms.module';
import { MoleculesModule } from 'src/app/shared/components/molecules/molecules.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    OrganismsModule,
    MoleculesModule,
  ],
})
export class FavoritesModule {}
