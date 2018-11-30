import { Component, OnInit } from '@angular/core';
import { ReservationModel } from '../../../models/reservation.model'
import { ReservationService } from 'src/app/core/api/reservation.service';
import { LoadingService } from 'src/app/core/util/loading.service';
import { DialogService } from 'src/app/core/dialog/dialog.service';
declare let $: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private listReservations: Array<ReservationModel> = [];
  private selectedBookingCode: String;

  constructor(
    private reservationService: ReservationService,
    private loading: LoadingService,
    private dialog: DialogService,
  ) { }

  ngOnInit() {
    this.loading.show();

    // load user's booking history
    this.reservationService.getOwnReservations().subscribe( data => {
     
      let returnedReseration = data.data;
      returnedReseration.forEach(element => {
        this.listReservations.push(new ReservationModel(element))
      });
      
      this.listReservations.sort(this.sortByBookingFrom);

      $.contentWayPoint();
      this.loading.hide();
    })
  }

  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  sortByBookingFrom(reservation1, reservation2) {
    return reservation2.bookingFrom - reservation1.bookingFrom;
  };

  cancel() {
    this.reservationService.cancel(this.selectedBookingCode).subscribe( data => {  
      for (let i = 0; i < this.listReservations.length; i++) {
        if(this.listReservations[i].code == this.selectedBookingCode) {
          this.listReservations[i].status = "CANCELLED"
        }
      }
    }, err => {
        console.log(err)
        this.dialog.showError();
    })
  }
}
