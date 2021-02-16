import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
class services {
  id: number;
  name: string;
  redirectionLink: string;
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
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.servicesList.push(
      { id: 0, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      { id: 1, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      { id: 2, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      { id: 3, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      { id: 4, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      { id: 5, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/' },
      )
  }

  //Toggle isSelecting true/false for multiple service selection
  ToggleSelection() {
    this.isSelecting = !this.isSelecting;
  }
}
