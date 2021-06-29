import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttorneyServiceService {
  //public baseUrl = 'http://dev-api.robinsonandhenry.com:3000';
  public baseUrl = 'http://18.116.213.67:3000';
  showLoader = new BehaviorSubject(false);
  public isLoggedIn = new BehaviorSubject(false);
  constructor() { }
}
