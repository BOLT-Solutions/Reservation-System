import { MapsAPILoader } from '@agm/core';
import { Component, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { createReservationHistoryModel } from '../../models/request/createReservationHistoryModel';
import { getStoreIdsModel } from '../../models/request/getStoreIdsModel';
import { BranchesModel } from '../../models/response/BranchesModel';
import { BranchService } from '../../services/Branch-service';
import { ReservationHistoryService } from '../../services/Reservation-History-Service';
import { LanguageHelper } from '../../services/utilities/LanguageHelper';
import { } from 'googlemaps';

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
  selectedStores = [];
  servicesList: Array<services> = new Array<services>(); // Dummy Model
  servicesListSearchBackup: Array<services> = new Array<services>();
  branchesList: Array<BranchesModel> = new Array <BranchesModel>()
  selectedBranch: BranchesModel;
  isLoading: boolean = false;
  storeIdsModel: getStoreIdsModel = new getStoreIdsModel;
  //query params
  user;
  RHID: string = "";

  //Google Maps Variables
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  private geoCoder;

  currentLatitude: number;
  currentLongitude: number;
  zoom: number;
  address: string;

  selectedserviceMap: number = null;
  //Language Variables
  langVar;
  direction;
  //mobile view variable
  isMobile: boolean = false;
  searchWords;

  @Output() searchcriteria = new EventEmitter<String>();

  constructor(private branchService: BranchService,private router: Router, public languageHelper: LanguageHelper, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private reservationHistoryService: ReservationHistoryService) {
    this.langVar = this.languageHelper.initializeMode().Services;
    this.direction = this.languageHelper.initializeMode().dir;
  }

  ngOnInit(): void {

    if (window.innerWidth < 991) {
      this.isMobile = true;
    }

    this.selectedStores = JSON.parse(localStorage.getItem('Selectedstores'))
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log("token", this.user.token);
    console.log("selected stores: ", this.selectedStores)

    for (let i = 0; i < this.selectedStores.length; i++) {
      this.storeIdsModel.storeIds.push(this.selectedStores[i].id)
    }
    console.log("store ids model: ", this.storeIdsModel)

    //Fetch selected stores branches
    this.branchService.GetAllStoresbranches(this.storeIdsModel).subscribe(stores => {
      this.branchesList = stores.data;
      console.log("branches list: ", this.branchesList)
      if (this.servicesList == null || this.servicesList == undefined) {
        this.router.navigate(['/reservation/services']);
      }
      else {
        this.servicesListSearchBackup = JSON.parse(localStorage.getItem('Selectedstores'));
        this.selectedBranch = this.branchesList[0];
        //for testing purposes
        //this.selectedService.distance = 0.5;
      }
      setTimeout(() => {
        if (this.mapElement != undefined) {
          this.SetMap(this.selectedBranch);
          this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
          });
        }
        else {
          this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
          });
        }
      }, 2000);

    }, error => {
      //this.isLogging = false;
      console.log("error", error)
    })
  }

  SearchService() {
    //this.searchcriteria.emit(this.searchWords); // emit input
    this.MatchString(this.searchWords);
  }
  //Search services list from keyboard input
  MatchString(input) { 
    if (input) {
      //Match name with input
      //this.branchsList = this.branchsList.filter(s => s.name.toLowerCase().includes(input.toLowerCase()) || s.address.toLowerCase().includes(input.toString().toLowerCase()));
    }
    else {
      this.servicesList = this.servicesListSearchBackup;
    }
  }

  ViewStoreMap(branch: BranchesModel) {
    this.SetMap(branch);
  }

  ViewStoreMapResponsive(service: services) {
    this.selectedserviceMap = service.id;
  }

  ViewLess(serviceId: number) {
    console.log(this.selectedserviceMap)
    this.selectedserviceMap = null;
    document.getElementById('map' + serviceId.toString()).style.display = 'none';
  }

  SetMap(selectedBranch: BranchesModel) {
    setTimeout(() => {
      const mapProperties = {
        center: new google.maps.LatLng(parseFloat(selectedBranch.latitude), parseFloat(selectedBranch.longitude)),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      console.log("long/lat: ", parseFloat(selectedBranch.latitude), parseFloat(selectedBranch.longitude) )
    }, 500);

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
        //window.alert('Geocoding Service: You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable Learn more at https://developers.google.com/maps/gmp-get-started');
      }
    });
  }


  Reserve(Branch: BranchesModel) {
    const createReservationHistoryModel: createReservationHistoryModel={
      branchId: Branch.id,
      customerUserId: this.user.userId
    }
    console.log("createReservationHistoryModel", createReservationHistoryModel)

    //create reservation history record
    this.reservationHistoryService.CreateReservationRecord(createReservationHistoryModel).subscribe(res => {
      if (res.succeeded) {
        console.log("res", res.data , this.user)
        //window.location.href = Branch.webSiteLink + "RHID=" + res.data.id + "&Token=" + this.user.token;
        console.log("Page to redirect to: ", Branch.webSiteLink + "?RHID=" + res.data.id + "&Token=" + this.user.token);
        window.location.href = Branch.webSiteLink + "?RHID=" + res.data.id + "&Token=" + this.user.token;
      }

      //this.isLoading = false

    }, error => {
      //this.isLogging = false;

      console.log("error", error)
    })
  }
}
