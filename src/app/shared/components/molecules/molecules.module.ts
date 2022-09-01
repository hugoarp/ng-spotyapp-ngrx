import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { AtomsModule } from '../atoms/atoms.module';
import { TrackDetailsComponent } from './track-details/track-details.component';
import { UserButtonComponent } from './user-button/user-button.component';

@NgModule({
  declarations: [
    NavButtonComponent,
    TrackDetailsComponent,
    UserButtonComponent,
  ],
  imports: [CommonModule, AtomsModule],
  exports: [NavButtonComponent, TrackDetailsComponent, UserButtonComponent],
})
export class MoleculesModule {}
