import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";
import {Employees} from "../../response/service-response";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public ngDestroyed$ = new Subject();
  employees?: Employees[];
  search: any;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getEmployeesList();
  }

  getEmployeesList(): void {
    this.dataService.getEmployees().pipe(takeUntil(this.ngDestroyed$)).subscribe(res => {
      this.employees = res;
    });
  }

  getAvatar(firstName: string, lastName: string): string {
    return firstName.slice(0, 1).toUpperCase() + lastName.slice(0, 1).toUpperCase();
  }

  employeesDetail(id: number) {
    this.router.navigate(['employees/detail'], { queryParams: { id: id }});
  }
}
