import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root',
})
export class GuestGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.userService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['home']);
        return true;
    }
}