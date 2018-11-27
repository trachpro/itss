import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../core/api/rooms.service';
import { LoadingService } from '../../core/util/loading.service';
import { RoomModel } from './room/room.model';
declare var $: any;

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  listRoom: Array<RoomModel> = [];

  constructor(
    private roomsService: RoomsService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    this.loading.show();
    this.roomsService.list().subscribe( data => {
      this.loading.hide();

      if(data instanceof Array) {
        data.forEach(element => {
          this.listRoom.push(new RoomModel(element));
        })
      }

      console.log("roomList: ", this.listRoom);
      $.contentWayPoint();
    })
  }

  ngAfterViewInit() {
    $.carousel();
  }
}
