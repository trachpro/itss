import { Injectable } from '@angular/core';
import { MainApiService } from '../util/main-api.service';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';

@Injectable()
export class ReservationService {
    private uri: String = "api/reservations"
  constructor(
      private mainApi: MainApiService,
      private storageService: StorageService
    ) { }

    getOwnReservations(): Observable<any> {
        return this.mainApi.get(this.uri + "/own")
    }

    cancel(code: String): Observable<any> {
        return this.mainApi.put(this.uri + "/cancel/" + code, null);
    }

    registerReservation(params): Observable<any> {
      return this.mainApi.post('api/reservations', params);
    }
}
