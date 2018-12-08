import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../core/api/rooms.service';
import { LoadingService } from '../../core/util/loading.service';
import { RoomModel } from '../../models/room.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationModel } from '../../models/reservation.model';
import { DialogService } from '../../core/dialog/dialog.service';
import { StorageService } from '../../core/util/storage.service';
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
  reservation: ReservationModel;
  capacity: number;
  isAllow: boolean = false;
  isLogin: boolean;

  constructor(
    private roomsService: RoomsService,
    private loading: LoadingService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dialogService: DialogService,
    private storage: StorageService
  ) {
    this.isLogin = this.storage.get("accessToken");
  }

  async ngOnInit() {
    this.loading.show();
    this.activateRoute.queryParams.subscribe( data => {
      this.reservation = new ReservationModel(data);
      this.capacity = data.capacity;
      this.fetchData()
    })
  }

  fetchData() {
    if(this.isAllow = !this.checkParams()) {
      this.roomsService.getListByParams(this.capacity, this.getFormatedDate(this.reservation.bookingFrom), this.getFormatedDate(this.reservation.bookingTo)).subscribe(data => {
        this.filterRooms(data.data.rooms);
        this.loading.hide();
        $.contentWayPoint();
      }, () => {
        this.loading.hide();
      })
    } else {
      this.roomsService.list().subscribe( data => {
        this.loading.hide();
        this.filterRooms(data);
        $.contentWayPoint();
      }, () => {
        this.loading.hide();
      })
    }
  }

  filterRooms(data) {
    if(data instanceof Array) {
      data.forEach((element) => {
        rooms.forEach(ele => {
          if(element._id == ele._id) {
            this.listRoom.push(new RoomModel(Object.assign(element, ele)));
          }
        });
      })
    }
  }

  getFormatedDate(date: Date) {
    return date.toLocaleDateString().replace('/','-').replace('/','-');
  }

  checkParams() {

    return !this.reservation.bookingFrom || !this.reservation.bookingTo || !this.capacity || !this.isLogin;
  }

  ngAfterViewInit() {
    $.carousel();
    $.initDatepicker();
  }

  submit() {
    if(!$('#checkin_date').val() || !$('#checkout_date').val() || !this.capacity || !this.compareDate()) {
      this.dialogService.showError("invalid params");
      return;
    }
    this.reservation.bookingFrom = new Date($('#checkin_date').val());
    this.reservation.bookingTo = new Date($('#checkout_date').val());

    this.loading.show();
    this.listRoom = [];
    this.fetchData();
  }

  compareDate() {
    return new Date($('#checkin_date').val()).getTime() <= new Date($('#checkout_date').val()).getTime();
  }
}
