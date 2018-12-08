export class ReservationModel {

  _id: String;
  code: String;
  bookingFrom: Date;
  bookingTo: Date;
  customerEmail: String;
  customerName: String;
  roomNo: number;
  checkin: Date;
  checkout: Date;
  status: String;
  total: number;

  constructor(params) {
    this._id = params._id;
    this.code = params.code;
    this.bookingFrom = params.bookingFrom? new Date(params.bookingFrom): null;
    this.bookingTo = params.bookingTo? new Date(params.bookingTo): null;
    this.customerEmail = params.customerEmail;
    this.customerName = params.customerName;
    this.roomNo = params.roomNo;
    this.checkin = params.checkin? new Date(params.checkin): null;
    this.checkout = params.checkout? new Date(params.checkout): null;
    this.status = params.status;
    this.total = params.total;
  }

  toApiObject() {
    return Object.assign({}, this, {
      bookingFrom: this.getFormattedDate(this.bookingFrom),
      bookingTo: this.getFormattedDate(this.bookingTo)
    })
  }
  getApiDate(date: Date) {
    return date.toLocaleDateString().replace('/','-').replace('/','-');
  }

  public getBookingFrom() {
    return this.getFormattedDate(this.bookingFrom);
  }

  public getBookingTo() {
    return this.getFormattedDate(this.bookingTo);
  }

  private getFormattedDate(datetime: Date) {
    return datetime.getFullYear() + "-" + datetime.getMonth() + "-" + datetime.getDate();
  }

  public getTimeFormatCheckin() {
    if(!(this.checkin instanceof Date)) {
      return ''
    } else {
      return `${this.checkin.toLocaleDateString()} ${this.checkin.getHours()}:${this.checkin.getMinutes()}`
    }
  }

  public getTimeFormatCheckout() {
    if(!(this.checkout instanceof Date)) {
      return ''
    } else {
      return `${this.checkout.toLocaleDateString()} ${this.checkout.getHours()}:${this.checkout.getMinutes()}`
    }
  }

  public getTotal() {

    return (this.bookingTo.getTime() - this.bookingFrom.getTime()) /(1000*60*60*24);
  }
}
