import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../core/api/staff.service';
import { DialogService } from '../../../core/dialog/dialog.service';
import { LoadingService } from '../../../core/util/loading.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../../../core/util/storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['../admin.component.css', './change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  private newPassword: String;
  private oldPassword: String;
  private confirmPassword: String;

  constructor(
    private staffService: StaffService,
    private dialog: DialogService,
    private loading: LoadingService,
    private activateRoute: ActivatedRoute,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(data => {
      if(data.accessToken) {
        this.storage.set('accessToken',data.accessToken);
      }
    })
  }

  submit() {
    let params = {
      newPassword: this.newPassword
    }
    this.loading.show();
    this.staffService.changePassword(params).subscribe(data => {
      this.loading.hide();
      this.dialog.showSuccess("Your password has been changed");
    }, err => {
      err = JSON.parse(err._body);
      this.loading.hide();
      this.dialog.showError(err.message);
    })
  }
}
