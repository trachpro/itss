import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { StaffModel } from '../../../models/staff.model';
import { StaffService } from '../../api/staff.service';
import { LoadingService } from '../../util/loading.service';
declare let $: any;

@Component({
  selector: 'app-staff',
  templateUrl: './staff.dialog.html',
  styleUrls: ['../../../pages/login/login.component.css', './staff.dialog.css']
})
export class StaffDialog implements OnInit {

  private message: String = '';
  constructor(
    private dialogRef: MatDialogRef<StaffDialog>,
    @Inject(MAT_DIALOG_DATA) public data: StaffModel,
    private staffService: StaffService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(".mat-dialog-container").css({"padding": "0", "border-radius": "25px"});
  }

  register() {
    this.loading.show();
    this.staffService.post(this.data).subscribe(result => {
      this.message = result.message;
      console.log("result: ", result);
      this.loading.hide();
      this.dialogRef.close({
        data: this.data,
        message: this.message
      })
    }, error => {
      error = JSON.parse(error._body);
      this.loading.hide();
      this.message = error.message;
      console.log("error: ", error);
    })
  }
}
