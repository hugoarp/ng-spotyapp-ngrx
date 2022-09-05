import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './track-list/track-list.component';
import { MoleculesModule } from '../molecules/molecules.module';

@NgModule({
  declarations: [TrackListComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [TrackListComponent],
})
export class TemplatesModule {}
