import { Component, OnInit, NgModule } from '@angular/core';
import { RevenueService } from '../../../core/api/revenue.service';
import { FormatService } from 'src/app/core/util/format.service';
import { MaxLengthValidator } from '@angular/forms';
import { LoadingService } from '../../../core/util/loading.service';
import {ChartService} from '../../../core/util/chart.service';

declare var $: any;
declare let Chart: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['../admin.component.css', './chart.component.css' ]
})
export class ChartComponent implements OnInit {

  private listTime: Array<String> = [];
  private listRevenues: Array<String> = [];
  private listNumberOfBookedRooms: Array<String> = [];

  private from: string // default values
  private to: string


  constructor(
    private revenueService: RevenueService,
    private formatService: FormatService,
    private loading: LoadingService,
    private chartService: ChartService
  ) { }

  ngOnInit() {

    this.from = "2018/10/10";
    this.to = "2018/12/30";
    this.callApiGetRevenue(this.from, this.to)
  }

  ngAfterViewInit() {
    $.initDatepicker();

    $("app-chart").mouseup(function (e) {
      var container = $(".datepicker.datepicker-dropdown");

      // if the target of the click isn't the container nor a descendant of the container
      if (
        !container.is(e.target) &&
        container.has(e.target).length === 0 &&
        (!$(e.target).attr('class') ||
        $(e.target).attr('class').indexOf('form-control datepicker') == -1)
      ) {

        container.remove();
      }
    });
  }

  submit() {
    this.callApiGetRevenue(this.from, this.to);
  }

  /**
   * Call Api get lists by revenues by month-year, calculate total income and number of reserved rooms in a month
   * @param from starting date
   * @param to end date
   */
  callApiGetRevenue(from, to) {
    this.loading.show();
    let dateFrom = new Date(from);
    let dateTo = new Date(to);

    this.listTime = [];
    this.listRevenues = [];
    this.listNumberOfBookedRooms = [];

    this.revenueService.getRevenue(this.getFormatedDate(dateFrom), this.getFormatedDate(dateTo)).subscribe(data => {
      let revenues = data.data.revenues;
      revenues.sort(this.sortByTime);
      revenues.map(e => {
        this.listTime.push(e.time);
        this.listRevenues.push(e.revenue);
        this.listNumberOfBookedRooms.push(e.numberOfRooms)

      })

      this.loading.hide();

      // draw line chart
      var ctx = document.getElementById("myAreaChart");
      this.chartService.drawLineChart(ctx,
                                      this.listTime,
                                      this.listRevenues)

        let barChart = $("#myBarChart");
        this.chartService.drawBarChart(barChart,
                                      this.listTime,
                                      this.listNumberOfBookedRooms)

    }, err => {
      this.loading.hide();
    })
  }

  getFormatedDate(date: Date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let sdate = date.getDate();
    return year + "-" + month + "-" + sdate;
  }

  sortByTime(time1, time2) {
    if (time1.year > time2.year)
      return true;
    else if (time1.year == time2.year) {
      return time1.month - time2.month
    } else {
      return false;
    }
  }
}
