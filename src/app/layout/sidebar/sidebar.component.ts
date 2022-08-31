import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {DynamicMenuService} from "../../service/dynamic-menu.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuConfig: any;
  users =  JSON.parse(localStorage.getItem('users') as any);


  constructor(
    private authService: AuthService,
    private menu: DynamicMenuService
  ) {

    this.menu.menuConfig$?.subscribe(res => {
      this.menuConfig = res;
    });
  }

  ngOnInit(): void {
  }

  getRoleController(data: Array<any>): boolean {
    return data.includes(this.users?.role);
  }

  logout() {
    this.authService.logout();
  }
}
