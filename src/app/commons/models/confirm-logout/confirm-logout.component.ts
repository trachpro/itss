import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/util/storage.service';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.css']
})
export class ConfirmLogoutComponent implements OnInit {

  constructor(private storage: StorageService) { }

  ngOnInit() {
  }

  clearStorage() {
    this.storage.removeItem("accessToken");
  }
}
