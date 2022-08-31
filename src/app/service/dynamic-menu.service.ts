import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DynamicMenu} from "../const/dynamic-menu";

const emptyMenuConfig = {
  items: [],
};

@Injectable({
  providedIn: 'root'
})
export class DynamicMenuService {

  private menuSubject = new BehaviorSubject<any>(emptyMenuConfig);
  menuConfig$?: Observable<any>;

  constructor() {
    this.menuConfig$ = this.menuSubject.asObservable();
    this.menuSubject.next(DynamicMenu);
  }
}
