import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {Dashboard} from "../../../response/service-response";
import {DataService} from "../../../service/data.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-special-day',
  templateUrl: './special-day.component.html',
  styleUrls: ['./special-day.component.scss']
})
export class SpecialDayComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  dashboards?: Dashboard[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getDashboardList();
  }

  getDashboardList(): void {
    this.dataService.getDashboard().pipe(takeUntil(this.ngDestroyed$)).subscribe(res => {
      this.dashboards = res;
    });
  }

  refresh() {
    this.getDashboardList();
  }
}
