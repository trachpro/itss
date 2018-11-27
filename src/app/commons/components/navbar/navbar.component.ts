import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../core/util/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input() activeString: any;
@Input() isLog: boolean;

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  clearStorage() {
    console.log("clear storage")
    this.storage.removeItem("accessToken");
  }
}
