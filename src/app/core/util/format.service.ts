import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RoomModel } from '../../models/room.model';

declare let $: any;

@Injectable()
export class FormatService {

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  rooms = [
    {
      "_id": "5bd4902aec512a1fe48bbac5",
      name: "Conference Room",
      roomNo: 501,
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
      roomNo: 106,
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
      roomNo: 202,
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
      roomNo: 303,
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
      roomNo: 606,
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
      roomNo: 205,
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

  constructor() { }

  formatDate(time) {

    if(!time) time = null;

    let d = new Date(time);
    let day: any = d.getDate();
    let month: any = this.monthNames[d.getMonth()];
    let year = d.getFullYear();

    return month + ' ' + day + ', ' + year;
  };

  getRoomByRoomNo(roomNo) {
    return new RoomModel(this.rooms.find( element => {
      return element.roomNo == roomNo
    }))
  }

  formatDateTime(time) {
    if(!time) time = null;

    let d = new Date(time);
    let day: any = d.getDate();
    let month: any = this.monthNames[d.getMonth()];
    let year = d.getFullYear();
    let hour = d.getHours();
    let Hour = ("0" + hour).slice(-2);
    let minute = d.getMinutes();
    let Minute = ("0" + minute).slice(-2);
    return month + ' ' + day + ', ' + year + ' at ' + Hour + ':' + Minute;

  }

  getApiDate(date: Date) {
    return date.toLocaleDateString().replace('/','-').replace('/','-');
  }

  getYYYYMMDD(date) {
    if(date instanceof Date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    } else return '';
  }

  formatData(src, mainProp, level?) {

    level = level? level: 1;

    let flag = {};

    for(let index = 0; index < src.length; index++) {

      let element = src[index];

      let ob ={};

      let name = '';

      for(let e in element) {

        let arr = e.split('.');

        let len = arr.length;

        if(len - 1 >= level) {

          ob[arr[len-1]] = element[e];

          arr.pop();
          name = arr.join('.');

          delete element[e];
        }
      }

      let subFlag = flag[element[mainProp]];

      if(subFlag) {

        src[subFlag][name].push(ob);
        src.splice(index, 1);
        index--;
      } else {

        flag[element[mainProp]] = index + "";
        element[name] = [ob];
      }
    };
  }

  copyObject(src, des) {

    for(let e in src) {

      des[e] = src[e];
    }
  }

  convertToArrayObservable(methodCallback, array, compareCallback, params?, property?):  Array<Observable<any>> {

    let res: Array<Observable<any>>  = [];

    array.forEach(element => {

      if(compareCallback(element)) {

        params[property] = element[property]

        res.push(methodCallback(params));
      }
    });

    return res;
  }

  getFormatedDate(date: Date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let sdate = date.getDate();
      return year + "-" + month + "-" + sdate;
    // return date.toLocaleDateString().replace('/','-').replace('/','-');
  }
}
