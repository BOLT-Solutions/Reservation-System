import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivateChild, CanActivate {

    constructor( private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      //if (this.authService.isAuthenticated()) {
      //      return true;
      //  }
      //else {
      //  this.router.navigate(['auth']);
      //      return false;
      //  }
      return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      //if (this.authService.isAuthenticated()) {
      //    this.router.navigate(['homeManagement']);
      //    return false;
      //  }
      //else {
      //      return true;
      //}
      return true;

    }

}
