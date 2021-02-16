import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../../services/http-services/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const routes: Routes = [
 
      { path: 'login', component: LoginComponent },/*, canActivate: [AuthGuardService]*/
      { path: 'register', component: SignupComponent },/*, canActivate: [AuthGuardService]*/
      { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
