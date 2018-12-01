import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  private newPassword: String;
  private oldPassword: String;
  private confirmPassword: String;
  
  constructor() { }

  ngOnInit() {
    
  }

  // reset() {
  //   this.newPassword = "";
  //   this.oldPassword = "";
  //   this.confirmPassword = "";
  // }

}
