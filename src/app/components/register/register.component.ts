import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  socialUser!: SocialUser;

  constructor(
    private socialAuthService: SocialAuthService,
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  registerWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      () => {
        this.socialAuthService.authState.subscribe(
          (user) => {
            this.socialUser = user as SocialUser;
            let userData: User = this.socialUser as User;
            this.userService.register(userData).subscribe(
              (response) => {
                let dbUser: User = response.data as User;
                dbUser.idToken = this.socialUser.idToken;
                this.userService.saveUser(dbUser);
                this.router.navigate(['home']);
              },
              (error) => {
                this.toastrService.error('Usuario ya registrado');
              }
            );
          }
        );
      }
    );
  }

}
