import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoleculesModule } from '../molecules/molecules.module';
import { TrackListComponent } from './track-list/track-list.component';

@NgModule({
  declarations: [TrackListComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [TrackListComponent],
})
export class TemplatesModule {}
