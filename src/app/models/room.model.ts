export class RoomModel {

  _id: String;

  capacity: number;

  price: number;

  type: String;

  status: String;

  beds: Beds;

  options: Array<String> = [];

  img: String;

  name: String;

  roomNo: number;

  constructor(params) {
    this._id = params._id;
    this.capacity = params.capacity;
    this.price = params.price;
    this.type = params.type;
    this.status = params.status;
    this.beds = params.beds;
    this.options = params.options;
    this.img = 'url(' + params.img + ')';
    this.name = params.name;
    this.roomNo = params.roomNo;
  }
}

interface Beds {
  single: number;
  double: number;
}
