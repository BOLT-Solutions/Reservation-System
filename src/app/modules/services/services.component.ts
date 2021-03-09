import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { StoresModel } from '../../models/response/StoresModel';
import { BranchService } from '../../services/Branch-service';
import { StoreService } from '../../services/Store-service';
import { LanguageHelper } from '../../services/utilities/LanguageHelper';
//class services {
//  id: number;
//  name: string;
//  redirectionLink: string;
//  availability: string;
//  address: string;
//  longitude: number;
//  latitude: number;
//  isChecked: boolean;
//}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  //
  isLoading: boolean = false;
  //Models
  storesList: Array<StoresModel> = new Array<StoresModel>(); 
  Selectedstores: Array<StoresModel> = new Array<StoresModel>(); 

  //servicesList: Array<services> = new Array<services>(); //Dummy service model
  //selectedServices: Array<services> = new Array<services>();

  //Toggle Variables
  isSelecting: boolean = false;
  selectAllStatus: boolean = false;
  choiceButton: string;

  //Language Variables
  langVar;
  direction;



  constructor(private router: Router, public languageHelper: LanguageHelper, private branchService: BranchService, private storeService: StoreService) {
    this.langVar = this.languageHelper.initializeMode().Services;
    this.direction = this.languageHelper.initializeMode().dir;
  }

  ngOnInit(): void {
    //activate loading svg
    this.isLoading = true

    this.choiceButton = this.langVar.multipleChoicesButton; // Set default button translation

    //fetch branches info
    this.storeService.GetAllStores().subscribe(stores => {
      //this.servicesList = branches;
      this.storesList = stores.data;
      console.log(this.storesList);
      this.isLoading = false

    }, error => {
      //this.isLogging = false;

      console.log("error", error)
    })

    //Push dummy data model
    //this.servicesList.push(
    //  { id: 0, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
    //  { id: 1, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.94301828449303, longitude: 30.877321716930787, isChecked: false },
    //  { id: 2, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
    //  { id: 3, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
    //  { id: 4, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
    //  { id: 5, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
    //  )
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

  SelectService(service: StoresModel) {
    if (this.isSelecting == false) {
      this.Selectedstores.push(service);
      localStorage.setItem('Selectedstores', JSON.stringify(this.Selectedstores));
      this.router.navigate(['/reservation/service-locations']);
    }
    else {
      this.SetServiceCheckbox(!service.isChecked, service);
    }
  }
  //Mark all services as checked / Unmark all services
  SelectAll(event) {
    if (this.isSelecting) { // multiple selection toggled
      if (event == false) {
        this.ToggleSelection();
      }
      for (let i = 0; i < this.storesList.length; i++) {
        this.storesList[i].isChecked = event;
      }
      this.Selectedstores = this.storesList.filter(s => s.isChecked == true); // Re-set selected services List
    }
    else { // Multiple Selection not toggled
      this.ToggleSelection();//Toggle multiple Selection
      this.SelectAll(event);//Re-call function
    }
  }
  //Set service isChecked
  SetServiceCheckbox(event, service: StoresModel) {
    service.isChecked = event;
    this.Selectedstores = this.storesList.filter(s => s.isChecked == true); // Re-set selected services List
  }

  ViewLocation() {
    if (this.Selectedstores.length > 0) {
      localStorage.setItem('Selectedstores', JSON.stringify(this.Selectedstores));
      this.router.navigate(['/reservation/service-locations']);
    }

  }

}
