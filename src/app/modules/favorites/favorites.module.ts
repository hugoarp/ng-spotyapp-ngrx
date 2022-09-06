import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './page/favorites.component';
import { OrganismsModule } from '@shared/components/organisms/organisms.module';
import { TemplatesModule } from '@shared/components/templates/templates.module';
import { MoleculesModule } from '@shared/components/molecules/molecules.module';

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
