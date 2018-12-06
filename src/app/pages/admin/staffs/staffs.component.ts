import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../core/api/staff.service';
import { LoadingService } from '../../../core/util/loading.service';
import { DialogService } from '../../../core/dialog/dialog.service';
import { StaffModel } from '../../../models/staff.model';

declare let $: any;

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['../admin.component.css', './staffs.component.css']
})
export class StaffsComponent implements OnInit {

  private staffList: Array<StaffModel> = [];
  constructor(
    private staffService: StaffService,
    private loading: LoadingService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.fetchStaffList();
  }

  fetchStaffList() {
    $('#dataTable').DataTable().destroy();
    this.loading.show();
    this.staffService.getList().subscribe( data => {
      console.log('data: ', data);
      if(data.data instanceof Array) {
        data.data.forEach(element => {
          this.staffList.push(new StaffModel(element));
        });
      }
      $(document).ready(() => {
        $('#dataTable').DataTable();
        this.loading.hide();
      });
    }, error => {
      this.loading.hide();
      console.log('error: ', error);
    })
  }

  showStaffRegister() {
    const staff = new StaffModel({});
    this.dialogService.showStaffRegisterForm(staff).subscribe( data => {
      if(data && data.data) {
        $('#dataTable').DataTable().destroy();
        this.staffList.push(data.data);
        $(document).ready(() => {
          $('#dataTable').DataTable();
        });
        this.dialogService.showSuccess(data.message);
      }
    })
  }
}
