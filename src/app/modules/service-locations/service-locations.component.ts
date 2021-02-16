import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageHelper } from '../../services/utilities/LanguageHelper';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

class services {
  id: number;
  name: string;
  redirectionLink: string;
  availability: string;
  address: string;
  longitude: number;
  latitude: number;
  isChecked: boolean;
  distance: number = 50;
}
@Component({
  selector: 'app-service-locations',
  templateUrl: './service-locations.component.html',
  styleUrls: ['./service-locations.component.scss']
})
export class ServiceLocationsComponent implements OnInit {

  //Models
  servicesList: Array<services> = new Array<services>(); // Dummy Model
  selectedService: services;
  //Google Maps Variables
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  private geoCoder;

  currentLatitude: number;
  currentLongitude: number;
  zoom: number;
  address: string;
  //Language Variables
  langVar;
  direction;
  constructor(private router: Router, public languageHelper: LanguageHelper, private mapsAPILoader: MapsAPILoader,
  private ngZone: NgZone) {
    this.langVar = this.languageHelper.initializeMode().Services;
    this.direction = this.languageHelper.initializeMode().dir;
  }

  ngOnInit(): void {
    this.servicesList = JSON.parse(localStorage.getItem('selectedServices'));
    console.log(this.servicesList)
    if (this.servicesList == null || this.servicesList == undefined) {
      this.router.navigate(['/services']);
    }
    else {
      this.selectedService = this.servicesList[0];
      //for testing purposes
      this.selectedService.distance = 0.5;
    }
    setTimeout(() => {
      this.SetMap(this.selectedService);
      this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;
      });
    }, 2000);
  }

  ViewStoreMap(service: services) {
    this.SetMap(service);
  }

  SetMap(selectedService: services) {
    const mapProperties = {
      center: new google.maps.LatLng(selectedService.latitude, selectedService.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLatitude = position.coords.latitude;
        this.currentLongitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.currentLatitude, this.currentLongitude);
      });
    }
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
}
