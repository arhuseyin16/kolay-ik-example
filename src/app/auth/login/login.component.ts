import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  role = [
    {id: 'admin', name: 'ADMİN'},
    {id: 'employee', name: 'EMPLOYEE'},
    {id: 'other', name: 'OTHER'}
  ]

  selectedRole: any;

  constructor(private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  submit() {
    if (!this.selectedRole || this.selectedRole === '--') {
      this.toastr.warning('Seçim Yapınız!', 'UYARI');
      return;
    }
    const data = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJuYmYiOjE2NjE3NzMxNDksImV4cCI6MTY2MTg1OTU0OSwiaWF0IjoxNjYxNzczMTQ5fQ.lcbypqKyWzKcGGmiQo45GBScdpdunc1EkumJNZk0omM',
      users: {
        role: this.selectedRole
      }
    }
    this.authService.setAuthFromLocalStorage(data);
  }
}
