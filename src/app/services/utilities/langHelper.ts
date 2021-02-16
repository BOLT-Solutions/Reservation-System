import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class langHelper  {

  //Get current language variable from Local Storage
  currentLang=(/true/i).test(localStorage.getItem("lang"));

  constructor(private router: Router) {
  }

  ngOnInit() {
    //Define default language variable
    if (localStorage.getItem("lang") === null)
      localStorage.setItem("lang", "en")
    else
      //Set language
      this.currentLang = (/true/i).test(localStorage.getItem("lang"))
  }

  //Initialize language variables
  initializeMode() { 
    if (this.currentLang) {
      return {
        Login:{
          formHeader: 'Fill the form below to get started.',
          formLoginHeader: 'Login below to get started.',
          userName:'User Name',
          PhoneNumber:'Phone Number',
          Password:'Your Password',
          ConfirmPassword: 'Confirm Password',
          signUp:'Sign Up',
          login:'Login',
        },
        image: 'Image',
        dir : 'ltr',
        LoginLabel : 'Login',
        textAfterLoginLabel : 'Sign in to your account',
        emailLabel : 'Email',
        passwordLabel : 'Password',
        loginButtonLabel : 'Login',
        loginErrorText : 'Login failed, Please check your email and password !',
        emailWarningLabel : 'Please enter a valid email address !',
        passwordWarningLabel : 'Please enter your password !',
        pView : 'PViewEng',


      }
    }
    else if (!this.currentLang) {
      return {
        Login: {
          formHeader: 'Fill the form below to get started.',
          formLoginHeader: 'Login below to get started.',
          userName: 'User Name',
          PhoneNumber: 'Phone Number',
          Password: 'Your Password',
          ConfirmPassword: 'Confirm Password',
          signUp: 'Sign Up',
          login: 'Login',
        },
        image: 'صورة',
        dir : 'rtl',
        LoginLabel : 'تسجيل الدخول',
        textAfterLoginLabel : 'تسجيل الدخول إلى حسابك',
        emailLabel : 'البريد الإلكتروني',
        passwordLabel : 'كلمه السر',
        loginButtonLabel : 'تسجيل الدخول',
        emailWarningLabel : 'من فضلك أدخل بريد أليكترونى صحيح !',
        passwordWarningLabel : 'من فضلك أدخل رقمك السري !',
        loginErrorText : 'فشل تسجيل الدخول ، يرجى التحقق من بريدك الإلكتروني وكلمة المرور !',
        pView : 'PViewAr',
    
      }
    }
  }
}
