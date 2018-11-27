export class RoomModel {

  _id: String;

  capacity: number;

  price: number;

  type: String;

  status: String;

  beds: Beds;

  constructor(params) {
    this._id = params._id;
    this.capacity = params.capacity;
    this.price = params.price;
    this.type = params.type;
    this.status = params.status;
    this.beds = params.beds;
  }
}

interface Beds {
  single: number;
  double: number;
}
