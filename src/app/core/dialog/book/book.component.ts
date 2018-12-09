import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoadingService } from '../../util/loading.service';
import { ReservationService } from '../../api/reservation.service';
import { FormatService } from '../../util/format.service';
import { StorageService } from '../../util/storage.service';
import { ReservationModel } from '../../../models/reservation.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  room: any = {};
  reservation: any = {};
  isStaff: boolean;
  errorMessage: string = "";
  constructor(
    private dialogRef: MatDialogRef<BookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private reservationService: ReservationService,
    private loading: LoadingService,
    private formatService: FormatService,
    private storage: StorageService
  ) {
    this.reservation = new ReservationModel(JSON.parse(JSON.stringify(this.data.reservation)));
    this.room = this.data.room? this.data.room: this.formatService.getRoomByRoomNo(this.reservation.roomNo);
    this.isStaff = this.storage.get('role') && this.storage.get('role') !== 'ROLE_CLIENT';
  }

  ngOnInit() {
  }

  update() {
    this.loading.show();
    this.reservationService.updateStatus(this.reservation.status, this.reservation.code).subscribe( res => {
      this.loading.hide();
      this.dialogRef.close({
        status: 1,
        message: res.message,
        reservation: res.data
      })
    }, error => {
      this.loading.hide();
      console.log("error: ", error);
      this.errorMessage = "bad request";
    })
  }

  booking() {
    this.loading.show();
    this.reservationService.registerReservation(this.reservation.toApiObject()).subscribe(res => {
      this.loading.hide();
      console.log("success: ", res);
      this.dialogRef.close({
        status: 1,
        message: res.message,
        reservation: res.data
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
