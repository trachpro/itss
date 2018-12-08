import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../core/dialog/dialog.service';
import { Router } from '@angular/router'
import { FormatService } from '../../core/util/format.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookingFrom: string;
  bookingTo: string;
  capacity = 1;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private formatService: FormatService
  ) {
    this.bookingFrom = this.formatService.getYYYYMMDD(new Date());
    this.bookingTo = this.formatService.getYYYYMMDD(new Date);
  }

  ngOnInit() {
  }

  gotoRooms() {
    if(!this.bookingFrom || !this.bookingTo || !this.capacity || !this.compareDate()) {
      this.dialogService.showError("invalid params");
      return;
    }
    this.router.navigate(['/rooms'], { queryParams: {
      bookingFrom: this.bookingFrom,
      bookingTo: this.bookingTo,
      capacity: this.capacity
    }});
  }

  compareDate() {
    return new Date(this.bookingFrom).getTime() < new Date(this.bookingTo).getTime() && new Date(this.bookingFrom).getTime() >= new Date(new Date().toLocaleDateString()).getTime();
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
