import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../core/api/login.service';

import { LoadingService } from '../../core/util/loading.service';
import { StorageService } from '../../core/util/storage.service';
// import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: String;
  private password: String;
  private isRemember: Boolean;
  private message: String;
  private returnUrl: any;
  private isStaff: boolean = false;

  constructor(
    private loginService: LoginService,
    private loadingService: LoadingService,
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.isRemember = this.storageService.get('isRemember');

    if(this.isRemember) {

      this.email = this.storageService.get('email');
      this.password = this.storageService.get('password');
    }

    this.activatedRoute.queryParams.subscribe( data => {

      this.returnUrl = data.returnUrl;
    })
  }

  submit() {

    this.save();

    const func = this.isStaff? this.loginService.loginStaff.bind(this.loginService): this.loginService.login.bind(this.loginService);

    this.loadingService.show();
    func({email: this.email,password: this.password}).subscribe(
      this.handleSuccess.bind(this),
      this.handleError.bind(this)
    )
  }

  handleError(error) {
    this.loadingService.hide();
      this.message = (error.message) ? error.message : "Cannot perform action"
  }

  handleSuccess(data) {
    console.log("data: ", data);
      this.storageService.set('accessToken',data.accessToken);
      this.storageService.set('id', data.id);
      this.storageService.set('name', data.name);
      this.storageService.set('role', data.role);
      this.storageService.set('email', data.email);

      this.router.navigate([this.returnUrl? this.returnUrl: data.role === "ROLE_CLIENT"? '/home': '/admin']);

      this.loadingService.hide();
  }

  save() {

    if(this.isRemember) {

      this.storageService.set("isRemember", true);
      this.storageService.set("email", this.email);
      this.storageService.set("password", this.password);
    } else {
      this.storageService.set("isRemember", false);
      this.storageService.set("email", '');
      this.storageService.set("password", '');
    }
  }
}
