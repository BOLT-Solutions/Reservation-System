import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { ServiceLocationsComponent } from '../service-locations/service-locations.component';
import { ServicesComponent } from '../services/services.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ServiceLocationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyDoAhMm8NbDXeVFeY_4OsvbDL3tuApVeVA',

      libraries: ['places']

    })
  ]
})
export class LayoutModule { }
