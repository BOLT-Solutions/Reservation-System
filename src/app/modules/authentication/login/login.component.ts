import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ErrorType } from '../../../../app/enums/error-type';
import { ModalComponent } from '../../shared/modal/modal.component';
import { SharedService } from '../../../services/shared-services/shared.service';
import { AuthenticationService } from '../../../services/shared-services/authentication.service';
import { langHelper } from '../../../services/utilities/langHelper';
import { formBuilderHelper } from '../../../services/utilities/formBuilderHelper';

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


  constructor(private router: Router, private sharedService: SharedService, private AuthService: AuthenticationService
    , private langHelper: langHelper, private formBuilderHelper: formBuilderHelper) { }


  ngOnInit(): void {
    this.langvar = this.langHelper.initializeMode();
  } 
 
  Login()
  {
    
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


}
