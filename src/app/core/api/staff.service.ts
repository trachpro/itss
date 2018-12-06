
import { Injectable } from '@angular/core';
import { MainApiService } from './../util/main-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StaffService {

  private uri: string = "api/staffs";

  constructor(
    private mainApi: MainApiService,
  ) { }

  post(params): Observable<any> {

    return this.mainApi.post(this.uri, params);
  }

  getList(): Observable<any> {

    return this.mainApi.get(this.uri);
  }

  changePassword(params): Observable<any> {
    return this.mainApi.put(this.uri + "/changepassword", params);
  }
}
