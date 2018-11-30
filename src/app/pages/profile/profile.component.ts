import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private type: Number;

  constructor() { }

  ngOnInit() {
    this.type = 1;
  }

  ngAfterViewInit() {
    $.loader();
    $.carousel();
    $.scrollWindow();
    $.mobileMenuOutsideClick();
    $.offcanvasMenu();
    $.burgerMenu();
    $.counter();
    $.contentWayPoint();
    $.OnePageNav();
  }

}
