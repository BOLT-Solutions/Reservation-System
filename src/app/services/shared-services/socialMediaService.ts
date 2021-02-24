
import { Injectable } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Injectable({
    providedIn: 'root'
})
export class socialMediaService {

  constructor(private authService: SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      //create user account with provided data
      console.log(user);

    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      //create user account with provided data
      console.log(user);

    });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
