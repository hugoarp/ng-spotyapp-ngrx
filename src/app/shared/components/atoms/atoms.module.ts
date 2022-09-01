import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenButtonComponent } from './green-button/green-button.component';
import { TextAComponent } from './text-a/text-a.component';
import { GIconComponent } from './g-icon/g-icon.component';
import { CoverImgComponent } from './cover-img/cover-img.component';
import { TextBComponent } from './text-b/text-b.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [
    GreenButtonComponent,
    TextAComponent,
    GIconComponent,
    CoverImgComponent,
    TextBComponent,
    AvatarComponent,
  ],
  imports: [CommonModule],
  exports: [
    GreenButtonComponent,
    TextAComponent,
    GIconComponent,
    CoverImgComponent,
    TextBComponent,
    AvatarComponent
  ],
})
export class AtomsModule {}
