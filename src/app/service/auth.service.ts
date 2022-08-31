import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class AuthService {
  private readonly AccessToken = 'token';
  private readonly AccessUsers = 'users';

  constructor(private router: Router, private toastr: ToastrService) { }

  setAuthFromLocalStorage(auth: any): boolean {
    if (auth && auth.token) {
      localStorage.setItem(this.AccessToken, auth.token);
      localStorage.setItem(this.AccessUsers, JSON.stringify(auth.users));
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.AccessToken);
    localStorage.removeItem(this.AccessUsers);
    this.router.navigate(['/login']);
  }

  isTokenAndUsers(): boolean {
    if (localStorage.getItem(this.AccessToken) && localStorage.getItem(this.AccessUsers)) {
      return true;
    } else {
      this.toastr.warning('Lütfen Giriş Yapınız!', 'UYARI');
      this.logout();
    }
    return true;
  }

  isRole(): boolean {

    return true;
  }

}
