import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../core/api/rooms.service';
import { LoadingService } from '../../core/util/loading.service';
import { RoomModel } from './room/room.model';
declare var $: any;

const rooms = [
  {
    "_id": "5bd4902aec512a1fe48bbac5",
    name: "Conference Room",
    img: "assets/images/room-1.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  }, {
    "_id": "5bd4a45077bacd0012a9b87a",
    name: "Lucxury Room",
    img: "assets/images/room-2.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  },{
    "_id": "5bfe98c1aef520817bdfc04e",
    name: "Party Room",
    img: "assets/images/room-3.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  },{
    "_id": "5bfe99ccaef520817bdfc04f",
    name: "Speech Room",
    img: "assets/images/room-4.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  },{
    "_id": "5bfe99feaef520817bdfc050",
    name: "Normal Room",
    img: "assets/images/room-5.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  },{
    "_id": "5bfe9a4eaef520817bdfc051",
    name: "Medium Room",
    img: "assets/images/room-6.jpg",
    options: [
      "Perfect for traveling couples",
      "Breakfast included",
      "Two double beds",
      "Baby sitting facilities",
      "Free wifi"
    ]
  },
]

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
        data.forEach((element) => {
          rooms.forEach(ele => {
            if(element._id == ele._id) {
              this.listRoom.push(new RoomModel(Object.assign(element, ele)));
            }
          });
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
