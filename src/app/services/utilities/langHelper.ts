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
        dir: 'ltr',
        image: 'Image',
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
        dir: 'rtl',
        image: 'صورة',
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
