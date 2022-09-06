import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()

export class AuthRouteGuard implements CanActivate {

  authRole = false;

  constructor(private router: Router,
              private toastr: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const authorities = route.data.authorities as Array<any>;
    const usersRole = JSON.parse(localStorage.getItem('users') as any);

    if (usersRole) {
     this.authRole = authorities.includes(usersRole.role);
      if (!this.authRole) {
        this.toastr.error(`${usersRole?.role?.toUpperCase()} yetkisi ile bu sayfaya giriş yapamazsınız!`, 'YETKİ HATASI');
        this.router.navigate(['dashboard']);
        return false;
      }
    }
    return true;
  }
}
