import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './green-button/green-button.component';
import { TextAComponent } from './text-a/text-a.component';
import { GIconComponent } from './g-icon/g-icon.component';
import { CoverImgComponent } from './cover-img/cover-img.component';
import { TextBComponent } from './text-b/text-b.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    GreenButtonComponent,
    TextAComponent,
    GIconComponent,
    CoverImgComponent,
    TextBComponent,
  ],
  imports: [CommonModule],
  exports: [
    GreenButtonComponent,
    TextAComponent,
    GIconComponent,
    CoverImgComponent,
    TextBComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AtomsModule {}
