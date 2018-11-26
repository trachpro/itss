import { Injectable } from '@angular/core';

declare var $: any;

@Injectable()
export class LoadingService {

  constructor() { }

  public show() {

    if($('#ftco-loader.show').length == 0) {
      $('#ftco-loader').addClass('show');
    }
  }

  public hide() {

    if($('#ftco-loader.show').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }
}
