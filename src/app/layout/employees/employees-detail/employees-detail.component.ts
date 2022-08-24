import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../../service/data.service";
import {Department, Employees, Location} from "../../../response/service-response";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {
  employeesId: any;
  employees?: Employees;
  department?: Department[];
  locations?: Location[];
  currentForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    startDate: [''],
    departmentId: [''],
    locationId: [''],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.id) {
        this.employeesId = params.id;
      } else {
        this.router.navigate(['dashboard']);
      }
    });
  }

  ngOnInit(): void {
    this.getDepartmentList();
    this.getEmployees();
    this.getLocationList();
  }

  getEmployees(): void {
    this.dataService.getEmployees().subscribe(res => {
      this.employees = res.find(x => x.id == this.employeesId);
      if (this.employees) {
        this.currentForm.patchValue(this.employees as any);
      } else {
        this.router.navigate(['dashboard']);
      }
    });
  }

  getDepartmentList(): void {
    this.dataService.getDepartment().subscribe(res => {
      this.department = res;
    });
  }

  getLocationList(): void {
    this.dataService.getLocation().subscribe(res => {
      this.locations = res;
    });
  }

}
