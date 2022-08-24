import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../service/data.service";
import {forkJoin, Subject} from "rxjs";
import {Department, Employees} from "../../../response/service-response";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  employees?: Employees[];
  departments?: Department[];
  doughnutData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.synchronicityService();
  }

  synchronicityService() {
    let employeesService = this.dataService.getEmployees();
    let departmentList = this.dataService.getDepartment();
    forkJoin([employeesService, departmentList]).pipe(takeUntil(this.ngDestroyed$)).subscribe((res: any) => {
      this.employees = res[0];
      this.departments = res[1];
      this.setDoughnutData();
    });
  }

  setDoughnutData(): void {
    let dataLength = [] as Array<any>;
    this.departments?.forEach(row => {
      dataLength.push({
        name: row.name,
        obj: this.employees?.filter(x => x.departmentId === row.id)
      });
    });
    this.doughnutData = {
      labels: this.departments?.map(x => x.name),
      datasets: [
        {
          data: dataLength.map(y => y.obj.length),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#76ddfb"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#76ddfb"
          ]
        }]
    };
  }

  refresh() {
    this.synchronicityService();
  }
}
