import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
