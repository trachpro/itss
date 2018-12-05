import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/util/loading.service';
import { ReservationService } from '../../../core/api/reservation.service';
import { ReservationModel } from '../../../models/reservation.model';
import { DialogService } from '../../../core/dialog/dialog.service';
declare let $: any;

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['../admin.component.css', './reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  private statusList: Array<String> = ['CANCELLED','BOOKING','CHECK-IN'];
  private reservationList: Array<ReservationModel> = [];
  private table: any;

  constructor(
    private loading: LoadingService,
    private reservationService: ReservationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    $('#dataTable').DataTable().destroy();
    this.reservationList = [];
    this.loading.show();
    this.reservationService.getReservationList({
      status: this.statusList.join(',')
    }, 0, 1000).subscribe( data => {
      console.log("success: ", data);
      data.data.content.map( element => {
        this.reservationList.push(new ReservationModel(element));
      })
      console.log("reservation: ", this.reservationList)
      $(document).ready(() => {
        $('#dataTable').DataTable();
      });
      this.loading.hide();
    }, error => {
      console.log("error: ", error);
      this.loading.hide();
    })
  }

  openReservation(item) {
    this.dialogService.showReservation({
      reservation: item
    })
  }
}
