import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  private pass: String;
  private oldPass: String;
  private confirmPass: String;
  
  constructor() { }

  ngOnInit() {
  }

}
