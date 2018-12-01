import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RoomsService } from '../../api/rooms.service';
import { LoadingService } from '../../util/loading.service';

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
    private roomsService: RoomsService,
    private loading: LoadingService
  ) {
    this.room = this.data.room;
    this.reservation = this.data.reservation;
  }

  ngOnInit() {
  }

  booking() {
    this.loading.show();
    this.roomsService.registerReservation(this.reservation.toApiObject()).subscribe(res => {
      this.loading.hide();
      this.dialogRef.close({
        status: 1,
        message: res.message
      })
    }, error => {
      this.loading.hide();
      this.dialogRef.close({
        status: 0,
        message: error.message
      })
    })
  }
}
