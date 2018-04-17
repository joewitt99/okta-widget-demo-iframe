import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Okta } from './okta.service';

@Injectable()
export class OktaAuthGuard implements CanActivate {

  oktaService;

  constructor(private okta: Okta, private router: Router, private route: ActivatedRoute) {
    this.oktaService = okta;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.okta.isAuthenticated()) { return true; }
console.log(next);
    this.router.navigate(['/login'], { queryParams: { returnUrl: next.queryParams['fromURI'] } });
    return false;
  }
}
