import { Injectable } from '@angular/core';
import { MainApiService } from '../util/main-api.service';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';

@Injectable()
export class RevenueService {
    private uri: String = "api/reservations/admin"
  constructor(
      private mainApi: MainApiService,
      private storageService: StorageService
    ) { }

    getRevenue(from: string, to: string): Observable<any> {
        return this.mainApi.get(`${this.uri}/${from}/${to}`);
    }
}
