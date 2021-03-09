import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/http-models/api-response';
import { getStoreIdsModel } from '../models/request/getStoreIdsModel';
import { API_CONSTANTS } from '../services/shared-services/api-constants';
import { BaseService } from '../services/shared-services/base-service';

@Injectable({
  providedIn: 'root'
})

//Component Services inherit from Base service for HTTP CRUD operations
// Observable functions call their corresponding End-Point API Constants
export class BranchService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }


  GetAllstorebranches(id: number): Observable<ApiResponse> {
    return this.get(API_CONSTANTS.GetAllstorebranches + id);
  }

  GetAllStoresbranches(getStoresIDModel: getStoreIdsModel): Observable<ApiResponse> {
    return this.post(API_CONSTANTS.GetAllStoresbranches, getStoresIDModel);
  }


}
