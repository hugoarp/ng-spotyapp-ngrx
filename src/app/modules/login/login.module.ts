import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './layout/login.component';
import { AtomsModule } from 'src/app/shared/components/atoms/atoms.module';
import { AuthComponent } from './pages/auth/auth.component';

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [CommonModule, LoginRoutingModule, AtomsModule],
})
export class LoginModule {}
