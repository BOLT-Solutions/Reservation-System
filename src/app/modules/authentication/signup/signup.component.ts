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
  isLogging: boolean = false;

  //translation
  langvar;

  signupForm;

  constructor(private router: Router, private sharedService: SharedService, private AuthService: AuthenticationService
    , private langHelper: LanguageHelper, private formBuilderHelper: formBuilderHelper) {

    this.signupForm = this.formBuilderHelper.CustomizeFormbuilderValidator({ userName: '', phoneNumber: '', password: '', confirmPassword: '' }, this.checkPasswords)

  }


  ngOnInit(): void {
    this.langvar = this.langHelper.initializeMode();
  
  }

  Register() {
    this.isLogging = true;

    const model = {
      userName: this.signupForm.controls.userName.value,
      phoneNumber: this.signupForm.controls.phoneNumber.value,
      password: this.signupForm.controls.password.value,
      confirmPassword: this.signupForm.controls.confirmPassword.value
    }
    this.AuthService.CustomerRegistration(model).subscribe(user => {
      //this.router.navigateByUrl('services');
      if (user.succeeded) {
       console.log("user",user)
      this.isLogging = false;
      this.router.navigateByUrl('/reservation');
      }

    }, error => {
      this.isLogging = false;

      console.log("error", error)
    })
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

  //validate password isEqual confimPassword
  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? false : { notSame: true }
  }

  //get signUp form controllers
  get f() {
    return this.signupForm.controls;
  }

}
