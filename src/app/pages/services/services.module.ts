import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import { ServicesRoutes } from './services.routes';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ServicesRoutes)
  ]
})
export class ServicesModule { }
