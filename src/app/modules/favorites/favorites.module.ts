import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './page/favorites.component';
import { OrganismsModule } from 'src/app/shared/components/organisms/organisms.module';
import { MoleculesModule } from 'src/app/shared/components/molecules/molecules.module';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    OrganismsModule,
    MoleculesModule,
    TemplatesModule,
  ],
  exports: [FavoritesComponent],
})
export class FavoritesModule {}
