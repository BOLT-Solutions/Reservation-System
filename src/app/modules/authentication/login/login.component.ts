import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/shared-services/authentication.service';
import { SharedService } from '../../../services/shared-services/shared.service';
import { formBuilderHelper } from '../../../services/utilities/formBuilderHelper';
import { LanguageHelper } from '../../../services/utilities/LanguageHelper';
import { ModalComponent } from '../../shared/modal/modal.component';
import { socialMediaService } from '../../../services/shared-services/socialMediaService';
import {  SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { LoginModel } from '../../../models/request/LoginModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html' , 
  styleUrls:['login.component.scss']
})
export class LoginComponent
{
  //handling show/hide password
  inputType: string = "password";
  pView: string = "-slash";
  //keep me logged in boolean
  keepMeBoolean: boolean = false;
  //translation
  langvar;
  isLogging: boolean = false;

  adminLoginForm;

  //PopUp
  @ViewChild(ModalComponent) modalComponent: ModalComponent;

  constructor(private router: Router, private sharedService: SharedService, private authService: AuthenticationService
    , private langHelper: LanguageHelper, private formBuilderHelper: formBuilderHelper, private socialMediaService: SocialAuthService) {

    this.adminLoginForm = this.formBuilderHelper.createFormBuilder({ phoneNumber: '' ,password:''})
  }
  

  ngOnInit(): void {
    this.langHelper.ngOnInit();
    this.langvar = this.langHelper.initializeMode();
  } 
 
  Login() {
    this.isLogging = true;

    const loginModel: LoginModel = {
      phoneNumber: this.adminLoginForm.controls.phoneNumber.value,
      password: this.adminLoginForm.controls.password.value
    }
    console.log(loginModel);
    this.authService.login(loginModel).subscribe(user => {
      //create user account with provided data
      console.log("user", user)
      // hide loading svg
      this.isLogging = false;
      //save user to keep him logged in
      if (this.keepMeBoolean)
        this.authService.setAuth(user.data);
      
      this.router.navigateByUrl('/reservation');
    }, error => {
      this.isLogging = false;

      console.log("error", error)

    })
  }

  KeepMe(event) {
    console.log(event.target.checked, this.keepMeBoolean)
    this.keepMeBoolean = event.target.checked;
  }

  SwitchLanguage(){

  }

  get f() {
    return this.adminLoginForm.controls;
  }

  //handling show/hide password
  viewPassword() {
    if (this.inputType != 'text') {
      this.inputType = 'text';
      this.pView = "";
    }
    else {
      this.inputType = 'password';
      this.pView = "-slash";

    }
  }

  //handling signin using google OLD
  signInWithFB() {
    //this.socialService.signInWithFB()
    this.isLogging = true;
    this.socialMediaService.signIn(FacebookLoginProvider.PROVIDER_ID).then(googleUser => {
      console.log(googleUser)
      this.authService.FBLogin({ idToken: googleUser.authToken })
        .subscribe((data) => {
          console.log(data)
          this.isLogging = false;
          this.router.navigateByUrl('/reservation');
        });
    });
  }

  //handling signin using google
  signInWithGoogle(): void {
    this.isLogging = true;
    this.socialMediaService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleUser => {
      console.log(googleUser)
        this.authService.googleLogin({ idToken: googleUser.idToken })
          .subscribe((data) => {
            console.log(data)
            this.isLogging = false;
            this.router.navigateByUrl('/reservation');

          }, error => {
              this.isLogging = false;

          })
    });
  }
}
