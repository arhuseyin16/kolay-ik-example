import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-detail',
  templateUrl: './permission-detail.component.html',
  styleUrls: ['./permission-detail.component.scss']
})
export class PermissionDetailComponent implements OnInit {

  permission: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
    this.permission.push(JSON.parse(localStorage.getItem('permission') as any));
    console.log(this.permission);
  }

}
