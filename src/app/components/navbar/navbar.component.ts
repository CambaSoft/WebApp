import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public user!: User;

  constructor(
    private userService: UserService,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) { }

  public logout() {
    this.userService.deleteUser();
    this.socialAuthService.signOut();
    this.router.navigate(['/']);
  }

  public get isLoggedIn(): boolean {
    let isAuthenticated = this.userService.isAuthenticated();
    if (isAuthenticated) {
      this.user = this.userService.getUser();
    }
    return isAuthenticated;
  }
}
