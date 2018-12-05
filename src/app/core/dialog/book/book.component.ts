import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from '../../util/loading.service';
import { ReservationService } from '../../api/reservation.service';
import { FormatService } from '../../util/format.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  room: any = {};
  reservation: any = {};
  constructor(
    private dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservationService: ReservationService,
    private loading: LoadingService,
    private formatService: FormatService
  ) {
    this.reservation = this.data.reservation;
    this.room = this.data.room? this.data.room: this.formatService.getRoomByRoomNo(this.reservation.roomNo);
  }

  ngOnInit() {
  }

  booking() {
    this.loading.show();
    this.reservationService.registerReservation(this.reservation.toApiObject()).subscribe(res => {
      this.loading.hide();
      console.log("success: ", res);
      this.dialogRef.close({
        status: 1,
        message: res.message
      })
    }, error => {
      this.loading.hide();
      console.log("error: ", error);
      this.dialogRef.close({
        status: 0,
        message: JSON.parse(error._body).message
      })
    })
  }
}
