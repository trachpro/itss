import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/api/user.service';
import { DialogService } from 'src/app/core/dialog/dialog.service';
import { LoadingService } from 'src/app/core/util/loading.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  private newPassword: String;
  private oldPassword: String;
  private confirmPassword: String;
  
  constructor(
    private userService: UserService,
    private dialog: DialogService,
    private loading: LoadingService,
  ) { }

  ngOnInit() {
    
  }

  submit() {
    let params = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    }
    this.loading.show();
    this.userService.changePassword(params).subscribe(data => {
      this.loading.hide();
      this.dialog.showSuccess("Your password has been changed");
    }, err => {
      this.loading.hide();
      this.dialog.showError("Your current password is wrong");
    })
  }

}
