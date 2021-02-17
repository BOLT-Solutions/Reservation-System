import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ButtonModule } from "primeng/button";
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        LoginComponent,
        AuthenticationComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,   
        SharedModule,
        DialogModule
    ]
})
export class AuthenticationModule { }
