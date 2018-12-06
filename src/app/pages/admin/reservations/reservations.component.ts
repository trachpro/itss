import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/util/loading.service';
import { ReservationService } from '../../../core/api/reservation.service';
import { ReservationModel } from '../../../models/reservation.model';
import { DialogService } from '../../../core/dialog/dialog.service';
import { RoomsService } from '../../../core/api/rooms.service';
import { FormatService } from '../../../core/util/format.service';
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
  private roomObj = {};

  constructor(
    private loading: LoadingService,
    private reservationService: ReservationService,
    private dialogService: DialogService,
    private roomService: RoomsService,
    private formatService: FormatService
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

  async openReservation(item) {
    if(!this.roomObj[item.roomNo]) {
      this.loading.show();
      await this.roomService.getRoomByRoomNo(item.roomNo).toPromise().then(result => {
        console.log("result: ", result);
        this.roomObj[item.roomNo] = Object.assign({}, this.formatService.getRoomByRoomNo(item.roomNo), result);
        this.loading.hide();
      }, error => {
        this.loading.hide();
      })
    }
    this.dialogService.showReservation({
      reservation: item,
      room: this.roomObj[item.roomNo]
    })
  }
}
