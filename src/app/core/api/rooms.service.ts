import { Injectable } from '@angular/core';
import { MainApiService } from '../util/main-api.service';
import { StorageService } from '../util/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private mainApi: MainApiService,
    // private storageService: StorageService
  ) { }

  list(): Observable<any> {
    return this.mainApi.get('api/rooms');
  }
}
