import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/shared-services/authentication.service';
import { SharedService } from '../../../services/shared-services/shared.service';
import { formBuilderHelper } from '../../../services/utilities/formBuilderHelper';
import { LanguageHelper } from '../../../services/utilities/LanguageHelper';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  //handling show/hide password
  inputType: string = "password";
  inputConfirmType: string = "password";
  pView: string = "-slash";
  pViewConfirmPassword: string = "-slash";

  //translation
  langvar;

  signupForm: FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(25)]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(25)])
  });

  constructor(private router: Router, private sharedService: SharedService, private AuthService: AuthenticationService
    , private langHelper: LanguageHelper, private formBuilderHelper: formBuilderHelper) { }


  ngOnInit(): void {
    this.langvar = this.langHelper.initializeMode();
  
  }

  Register() {
    this.router.navigateByUrl('services');

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

  viewConfirmPassword() {
    if (this.inputConfirmType != 'text') {
      this.inputConfirmType = 'text';
      this.pViewConfirmPassword = "";
    }
    else {
      this.inputConfirmType = 'password';
      this.pViewConfirmPassword = "-slash";

    }
  }
}
