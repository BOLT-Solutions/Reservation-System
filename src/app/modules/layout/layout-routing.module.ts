import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { HomeComponent } from '../home/home.component';
import { ServiceLocationsComponent } from '../service-locations/service-locations.component';
import { ServicesComponent } from '../services/services.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    //Empty path will be automatically redirected to from app-routing module.
    //Children modules/components are declared here.
    path: '', component: LayoutComponent, children: [

      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'service-locations', component: ServiceLocationsComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
