import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import { ServicesRoutes } from './services.routes';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ServicesRoutes),
    CommonsModule
  ]
})
export class ServicesModule { }
