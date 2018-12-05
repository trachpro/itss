import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private urlBase = 'https://ancient-coast-186633.herokuapp.com/'
  // private urlBase = 'http://localhost:8080/'
  constructor() { }

  getBaseURL() {

    return this.urlBase;
  }
}
