import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AtomsModule } from 'src/app/shared/components/atoms/atoms.module';
import { LoginComponent } from './page/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, AtomsModule],
})
export class LoginModule {}
