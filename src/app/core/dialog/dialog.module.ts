import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { DialogService } from './dialog.service';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { StaffDialog } from './staff/staff.dialog';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [
    ErrorComponent,
    SuccessComponent,
    BookComponent,
    StaffDialog
  ],
  providers: [
    DialogService
  ],
  entryComponents: [
    ErrorComponent,
    SuccessComponent,
    BookComponent,
    StaffDialog
  ]
})
export class DialogModule { }
