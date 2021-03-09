import { BaseService } from './base-service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { GoogleUserRequest } from '../../models/request/google-user';
import { UserToken } from '../../models/response/user-token';
import { JwtService } from './jwt.service';
import { API_CONSTANTS } from './api-constants';
import { ApiResponse } from '../../models/http-models/api-response';
import { LoginModel } from '../../models/request/LoginModel';
import { CustomerRegistrationModel } from '../../models/request/CustomerRegistrationModel';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService extends BaseService {

  private currentUserSubject = new BehaviorSubject<UserToken>({} as UserToken);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private httpClient: HttpClient, private jwtService: JwtService,) {
    super(httpClient);
    this.currentUserSubject = new BehaviorSubject<UserToken>(this.jwtService.getUser());
    this.currentUser = this.currentUserSubject.asObservable();

  }

  googleLogin(googleUser: GoogleUserRequest): Observable<UserToken> {
    console.log(googleUser)
    return this.httpClient
      .post<UserToken>(`${this.apiUrl}${API_CONSTANTS.googleAuth}`, googleUser)
      .pipe(map(profile => {
        this.setAuth(profile);
        return profile;
      }))
  }

  FBLogin(googleUser: GoogleUserRequest): Observable<UserToken> {
    console.log(googleUser)
    return this.httpClient
      .post<UserToken>(API_CONSTANTS.facebookAuth, googleUser)
      .pipe(map(profile => {
        this.setAuth(profile);
        return profile;
      }))
  }

  login(model: LoginModel): Observable<ApiResponse> {
    return this.post(API_CONSTANTS.Login, model)

  }
  CustomerRegistration(model: CustomerRegistrationModel): Observable<ApiResponse> {
    return this.post(API_CONSTANTS.CustomerRegister, model);
  }
  setAuth(user) {
    console.log()
    this.jwtService.saveUser(user);
    this.currentUserSubject.next(user);
  }

  logout() {
    this.purgeAuth();
  }

  purgeAuth() {
    this.jwtService.destroyUser();
    this.currentUserSubject.next(null);
  }

  //setToken(token: string) {
  //    localStorage.setItem("access_token", token);
  //}

  //getToken(): string {
  //    const token = localStorage.getItem("access_token");
  //    if (token) {
  //        return token;
  //    }
  //}

  //removeToken(): void {
  //    localStorage.removeItem("access_token");
  //}

  //isAuthenticated(): boolean {
  //    try {
  //        const token = this.getToken();
  //        if (token && !this.jwtHelper.isTokenExpired(token)) {
  //            return true;
  //        }
  //        return false;
  //    }
  //    catch {
  //        return false;
  //    }
  //}

  //isInRole(roleName: string): boolean {
  //    const token = this.getToken();
  //    if (token) {
  //        let roles: string[];
  //        const { role } = this.jwtHelper.decodeToken(token);
  //        roles = role;
  //        const res = roles.includes(roleName);
  //        if (res) {
  //            return true;
  //        }
  //    }
  //    return false;
  //}

}
