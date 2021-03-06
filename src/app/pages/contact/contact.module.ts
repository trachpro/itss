import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactRoutes } from './contact.routes';
import { CommonsModule } from '../../commons/commons.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes),
    CommonsModule
  ]
})
export class ContactModule { }
