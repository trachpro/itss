import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './core/util/loading.service';
import { StorageService } from './core/util/storage.service';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLog: boolean;

  constructor(private router: Router, private loadingService: LoadingService, private storageService: StorageService) {

    setTimeout(this.loadingService.hide, 500);
    this.router.events.subscribe(val => {
      $(window).scrollTop(0);
      this.isLog = this.storageService.get('accessToken') ? true: false;
    })
  }
}
