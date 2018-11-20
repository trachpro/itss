import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $.sliderMain();
    $.tabs();
    $.mainMenu();
    $.offcanvas();
    $.contentWayPoint();
    $.mobileMenuOutsideClick();
    $.parallax();
    $.fullHeight();
    $.counter();
    $('#date-start, #date-end').datepicker();
  }
}
