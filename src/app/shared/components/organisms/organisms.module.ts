import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TrackCardComponent } from './track-card/track-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavMenuComponent, TrackCardComponent],
  imports: [CommonModule, MoleculesModule, RouterModule],
  exports: [NavMenuComponent, TrackCardComponent],
})
export class OrganismsModule {}
