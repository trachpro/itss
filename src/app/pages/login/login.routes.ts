import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';

export const LoginRoutes: Routes = [{
  path: '',
  component: LoginComponent
}, {
  path: '/register',
  component: RegisterComponent
}];
