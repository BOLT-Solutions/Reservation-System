import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/shared-services/authentication.service';
import { SharedService } from '../../../services/shared-services/shared.service';
import { formBuilderHelper } from '../../../services/utilities/formBuilderHelper';
import { LanguageHelper } from '../../../services/utilities/LanguageHelper';
import { ModalComponent } from '../../shared/modal/modal.component';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html' , 
  styleUrls:['login.component.scss']
})
export class LoginComponent
{
  //handling show/hide password
  inputType: string = "password";
  pView: string ="-slash";

  //translation
  langvar;

  adminLoginForm: FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(25)])
  });

  //PopUp
  @ViewChild(ModalComponent) modalComponent: ModalComponent;

  title = 'SocialMediaAuthentication';

  constructor(private router: Router, private sharedService: SharedService, private AuthService: AuthenticationService
    , private langHelper: LanguageHelper, private formBuilderHelper: formBuilderHelper, private authService: SocialAuthService) { }
  

  ngOnInit(): void {
    this.langHelper.ngOnInit();
    this.langvar = this.langHelper.initializeMode();
  } 
 
  Login()
  {
    this.router.navigateByUrl('/reservation');
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
  //handling signin using google
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log("userData");
      console.log(user);

    });
  } 
}
