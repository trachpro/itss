import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactRoutes } from './contact.routes';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes)
  ]
})
export class ContactModule { }
