 import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { HTTP } from '@ionic-native/http/ngx';
 import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/models/http-models/api-response';
 import { Observable } from 'rxjs';
import { HTTPResponse } from '@ionic-native/http';
import { ErrorType } from '../../enums/error-type';

 export class BaseService {

     public apiUrl: string;
     private httpHeaders: HttpHeaders;
   private httpOptions!: {}
   private ionicHTTPClient: HTTP = new HTTP();

   constructor(private http: HttpClient) {
     this.apiUrl = environment.apiBaseUrl;
   
     }
     protected get(url: string, params?: HttpParams) : Observable<ApiResponse> {
         this.httpOptions = { 
             headers: this.httpHeaders,
             params: params,
             withCredentials: true
         };
         return this.http.get<ApiResponse>(this.apiUrl + url, this.httpOptions);
     }

     protected post(url: string, data: any, params?: HttpParams) : Observable<ApiResponse> {
         this.httpOptions = {
             headers: this.httpHeaders,
             params: params,
             withCredentials: true
         };
         return this.http.post<ApiResponse>(this.apiUrl + url, data, this.httpOptions);
   }

   protected ionicPostRequest(url: string, data: any, params?: HttpParams): Promise<HTTPResponse> {
     this.httpOptions = {
       headers: this.httpHeaders,
       params: params,
       withCredentials: true
     };
     //this.ionicHTTPClient.setHeader()
     return this.ionicHTTPClient.post(this.apiUrl + url, data, {});
   } 

 }
