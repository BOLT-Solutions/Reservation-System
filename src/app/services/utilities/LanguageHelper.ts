import { Injectable } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class LanguageHelper  {

  //Get current language variable from Local Storage
  currentLanguage = localStorage.getItem("Language");

  constructor(private router: Router) {}

  ngOnInit() {
    //Define default language variable
    if (this.currentLanguage == null || this.currentLanguage != 'EN' && this.currentLanguage != 'AR')
      localStorage.setItem("Language", "EN")
    else
      //Fetch current language
      this.currentLanguage = localStorage.getItem("Language")
  }

  //Initialize language variables
  initializeMode() {
    if (this.currentLanguage == 'EN') { //English Translations
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


        Services: {
          textAlign1: 'textAlignRight',
          textAlign2: 'textAlignLeft',
          header: 'Select The Service You Want From The Following List:',
          multipleChoicesButton: 'Multiple Choices',
          cancelButton: 'Cancel',
          select: 'Select',
          selectAll: 'Select All',
          viewLocation: 'View Location(s)'
        },
      }
    }
    else if (this.currentLanguage == 'AR') { //Arabic Translations
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
    
        Services: {
          textAlign1: 'textAlignLeft',
          textAlign2: 'textAlignRight',
          header: 'حدد الخدمة التي تريدها من القائمة التالية:',
          multipleChoicesButton: 'خيارات متعددة',
          cancelButton: 'إلغاء',
          select: 'اختر',
          selectAll: 'اختر الكل',
          viewLocation: 'عرض الموقع '
        },
      }
    }
  }
}
