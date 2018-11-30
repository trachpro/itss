import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ConfigService } from './../config.service';
import { HttpService } from './http.service';

@Injectable()
export class MainApiService {

  private nextLayer: any;

  constructor(private http: HttpService, private config: ConfigService) {

  }

  public get(url: string, params?: any, options?: any): Observable<any> {
    return this.http.get(url, params, options).map(res => this.handleResponse(res))
  }

  public post(url: string, params: any, options?: any): Observable<any> {
    return this.http.post(url, params, options).map(res => this.handleResponse(res));
  }

  public put(url: string, params: any, options?: any): Observable<any> {
    return this.http.put(url, params, options).map(res => this.handleResponse(res))
  }

  public delete(url: string, params?: any, options?: any): Observable<any> {
    return this.http.delete(url, options).map(res => this.handleResponse(res))
  }

  private handleResponse(response) {
    let res = JSON.parse(response._body);
      if (res.status !== false ) {
        return res;
      } else {
        throw res;
      }
  }
}
