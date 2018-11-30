import { Component, OnInit, Input } from '@angular/core';
import { RoomModel } from '../../../models/room.model';
import { DialogService } from '../../../core/dialog/dialog.service';

declare let $: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() room: RoomModel;
  constructor(
    private dialog: DialogService
  ) { }

  ngOnInit() {
    console.log("room: ", this.room);
  }

  ngAfterViewInit() {

    if(this.isLast) {
      $.contentWayPoint();
    }
  }

  showReservation() {

    this.dialog.showReservation(this.room).subscribe((result) => {
      console.log("close reservation: ", result);
    })
  }
}
