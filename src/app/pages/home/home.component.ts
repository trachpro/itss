import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/dialog/dialog.service';
import { Router } from '@angular/router'
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookingFrom: String;
  bookingTo: String;
  capacity = 1;

  constructor(
    private dialogService: DialogService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  gotoRooms() {
    if(!$('#checkin_date').val() || !$('#checkout_date').val() || !this.capacity || !this.compareDate()) {
      this.dialogService.showError("invalid params");
      return;
    }
    this.router.navigate(['/rooms'], { queryParams: {
      bookingFrom: $('#checkin_date').val(),
      bookingTo: $('#checkout_date').val(),
      capacity: this.capacity
    }});
  }

  compareDate() {
    return new Date($('#checkin_date').val()).getTime() <= new Date($('#checkout_date').val()).getTime();
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
    $.initDatepicker();
  }
}
