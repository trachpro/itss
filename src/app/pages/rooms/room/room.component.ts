import { Component, OnInit, Input } from '@angular/core';
import { RoomModel } from '../../../models/room.model';
import { DialogService } from '../../../core/dialog/dialog.service';
import { ReservationModel } from '../../../models/reservation.model';
import { StorageService } from '../../../core/util/storage.service';

declare let $: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() room: RoomModel;
  @Input() isAllow: boolean;
  @Input() reservation: ReservationModel;

  constructor(
    private dialog: DialogService,
    private storage: StorageService
  ) { }

  ngOnInit() {
    console.log("room: ", this.room);
    this.reservation.customerName = this.storage.get('name');
    this.reservation.customerEmail = this.storage.get('email');
    this.reservation.roomNo = this.room.roomNo;
  }

  ngAfterViewInit() {

    if(this.isLast) {
      $.contentWayPoint();
    }
  }

  showReservation() {

    this.dialog.showReservation({
      room: this.room,
      reservation: this.reservation
    }).subscribe((result) => {
      if(result && result.status && result.message) {
        this.dialog.showSuccess(result.message);
      } else if(result && !result.status && result.message) {
        this.dialog.showError(result.message);
      }
    })
  }
}
