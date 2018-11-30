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
        return this.mainApi.put(this.uri + "/cancel/" + code + "1", null);
    }

    // post(params): Observable<any> {
    //     params.token = this.storageService.get('token');
    //     return this.mainApi.post('comment/', params);
    // }

    // delete(id): Observable<any> {
    //     let token = this.storageService.get('token');
    //     return this.mainApi.delete('comment/'+id + '?token=' + token);
    // }

    // put(params): Observable<any> {
    //     params.token = this.storageService.get('token');
    //     return this.mainApi.put('comment',params);
    // }
}
