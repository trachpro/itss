import { Component, OnInit, NgModule } from '@angular/core';
import { RevenueService } from '../../../core/api/revenue.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormatService } from 'src/app/core/util/format.service';
import { MaxLengthValidator } from '@angular/forms';
import { LoadingService } from '../../../core/util/loading.service';

declare var $: any;
declare let Chart: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['../admin.component.css', './chart.component.css']
})
export class ChartComponent implements OnInit {

  private listTime: Array<String> = [];
  private listRevenues: Array<String> = [];
  private listNumberOfBookedRooms: Array<String> = [];

  private from: string = "2018/10/10"; // default values
  private to: string = "2018/12/30";

  constructor(
    private revenueService: RevenueService,
    private formatService: FormatService,
    private loading: LoadingService
  ) { }

  ngOnInit() {
    // this.callApiGetRevenue(this.from, this.to)
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
    this.from = $("#checkin_date").val()
    this.to = $("#checkout_date").val()

    // this.callApiGetRevenue(this.from, this.to);
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
      this.drawLineChart(ctx,
        this.listTime,
        this.listRevenues)

    }, err => {
      this.loading.hide();
    })
  }



  drawLineChart(element, label, data) {
    var myLineChart = new Chart(element, {
      type: 'line',
      data: {
        labels: label,
        datasets: [{
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: data,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: Math.max(...data),
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
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
