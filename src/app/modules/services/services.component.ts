import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageHelper } from '../../services/utilities/LanguageHelper';
class services {
  id: number;
  name: string;
  redirectionLink: string;
  isChecked: boolean;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  //Models
  servicesList: Array<services> = new Array<services>(); //Dummy service model
  selectedServices: Array<services> = new Array<services>();

  //Toggle Variables
  isSelecting: boolean = false;
  selectAllStatus: boolean = false;
  choiceButton: string;

  //Language Variables
  langVar;
  direction;
  constructor(private router: Router, public languageHelper: LanguageHelper) {
    this.langVar = this.languageHelper.initializeMode().Services;
    this.direction = this.languageHelper.initializeMode().dir;
  }

  ngOnInit(): void {
    this.choiceButton = this.langVar.multipleChoicesButton;
    this.servicesList.push(
      { id: 0, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      { id: 1, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      { id: 2, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      { id: 3, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      { id: 4, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      { id: 5, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', isChecked: false },
      )
  }

  //Toggle isSelecting true/false for multiple service selection
  ToggleSelection() {
    this.isSelecting = !this.isSelecting;
    if (this.choiceButton == this.langVar.multipleChoicesButton) {
      this.choiceButton = this.langVar.cancelButton;
    }
    else {
      this.choiceButton = this.langVar.multipleChoicesButton
    }
  }
  //Mark all services as checked / Unmark all services
  SelectAll(event) {
    if (this.isSelecting) { // multiple selection toggled
      if (event == false) {
        this.ToggleSelection();
      }
      for (let i = 0; i < this.servicesList.length; i++) {
        this.servicesList[i].isChecked = event;
      }
      this.selectedServices = this.servicesList.filter(s => s.isChecked == true); // Re-set selected services List
    }
    else { // Multiple Selection not toggled
      this.ToggleSelection();//Toggle multiple Selection
      this.SelectAll(event);//Re-call function
    }
  }
  //Set service isChecked
  SetServiceCheckbox(event, service: services) {
    service.isChecked = event;
    this.selectedServices = this.servicesList.filter(s => s.isChecked == true); // Re-set selected services List
  }
}
