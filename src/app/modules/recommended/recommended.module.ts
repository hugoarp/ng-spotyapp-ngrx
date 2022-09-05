import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedRoutingModule } from './recommended-routing.module';
import { RecommendedComponent } from './page/recommended.component';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';

@NgModule({
  declarations: [RecommendedComponent],
  imports: [CommonModule, RecommendedRoutingModule, TemplatesModule],
})
export class RecommendedModule {}
