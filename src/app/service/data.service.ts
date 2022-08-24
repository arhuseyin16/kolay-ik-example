import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Dashboard, Department, Employees, Location} from "../response/service-response";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getDashboard(): Observable<Dashboard[]> {
    return this.http.get<Dashboard[]>('assets/data/dashboard-list.json');
  }

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>('assets/data/department-list.json');
  }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>('assets/data/employees-list.json');

  }

  getLocation(): Observable<Location[]> {
    return this.http.get<Location[]>('assets/data/location-list.json');
  }
}
