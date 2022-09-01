import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MoleculesModule, RouterModule],
  exports: [NavMenuComponent],
})
export class OrganismsModule {}
