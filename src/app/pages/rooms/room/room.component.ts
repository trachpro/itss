import { Component, OnInit, Input } from '@angular/core';
import { RoomModel } from './room.model';

declare let $: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() isLast: boolean;
  @Input() room: RoomModel;
  constructor() { }

  ngOnInit() {
    console.log("room: ", this.room);
  }

  ngAfterViewInit() {

    if(this.isLast) {
      $.contentWayPoint();
    }
  }

}
