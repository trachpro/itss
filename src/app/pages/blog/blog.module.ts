import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BlogRoutes } from './blog.routes';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    CommonsModule
  ]
})
export class BlogModule { }
