import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

//Shared Components and imported modules between the project are imported here
//Components that shall be re-used between modules should be exported.
@NgModule({
  declarations: [

    ModalComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    ModalModule.forRoot()
  ]
  , exports: [

    ModalComponent
    ]
})
export class SharedModule { }
