
import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../util/storage.service';

@Injectable()
export class UserService {

  constructor(
    private mainApi: MainApiService,
    private storageService: StorageService
  ) { }

  post(params): Observable<any> {

    return this.mainApi.post('api/users', params);
  }

  get(id): Observable<any> {

    return this.mainApi.get('api/users/' + id + '?token=' + this.storageService.get('token'));
  }

  update(params): Observable<any> {

    params.token = this.storageService.get('token');

    return this.mainApi.put('api/users', params);
  }
}
