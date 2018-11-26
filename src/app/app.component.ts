import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './core/util/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private loadingService: LoadingService) {

    setTimeout(this.loadingService.hide, 500);
    this.router.events.subscribe(val => {

      // console.log("val: ", this.router.url);
    })
  }
}
