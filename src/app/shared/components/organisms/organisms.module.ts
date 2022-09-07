import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MoleculesModule, RouterModule],
  exports: [NavMenuComponent],
})
export class OrganismsModule {}
