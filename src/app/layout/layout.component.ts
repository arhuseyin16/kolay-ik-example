import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../service/data.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Employees} from "../response/service-response";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  employees?: Employees[];
  title: any = {};
  constructor(private route: Router,private dataService: DataService) {}

  ngOnInit(): void {
    this.getEmployeesList();
  }

  getEmployeesList(): void {
    this.dataService.getEmployees().pipe(takeUntil(this.ngDestroyed$)).subscribe(res => {
      this.employees = res;
    });
  }

  setHeader() {
    let idParam = this.route.url.split('?id=')[1];
    let path = this.route.url;
    let employ = null;
    if (idParam) {
      employ = this.employees?.find((x: any) => x.id == idParam);
    }
    this.title = {
      path: decodeURIComponent(path),
      id: idParam ? decodeURIComponent(idParam) : null,
      color: idParam ? decodeURIComponent(employ?.color as string) : null,
      name: idParam ? decodeURIComponent(employ?.firstName as string) : null,
      surname: idParam ? decodeURIComponent(employ?.lastName as string) : null
    }
  }
}
