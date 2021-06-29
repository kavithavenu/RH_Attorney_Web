import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //public baseUrl = 'http://dev-api.robinsonandhenry.com:3000';
  public baseUrl = 'http://18.116.213.67:3000';
  showLoader = new BehaviorSubject(false);
  constructor(private http:HttpClient) { }

  // Get current Location
  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
        
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }
   // Login
   login(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/login`,data);
  }

  socialMediaLogin(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/social_media`,data)
  }

  // Fetch Clients data
  fetchUserInfo(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/FetchAttorney`,data);
  }
  
  // Forgot Password
  forgotPass(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/forgotpassword`,data)
  }

  //Verify OTP
  verifyOTP(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/verify`,data)
  }
  // resend OTP
  resendOtp(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/resendOtp`,data);
  }
  
  // Reset Pass
  resetPass(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/reset_password`,data)
  }

  //changepassword
  changePassword(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/api/attorneys/changepassword`,data)
  }

  //send msg to rh team
  sendMsgToRhTeam(data):Observable<any>{
    console.log("sended data from sendmesg ... :",data);
    var resObj = {"response":3,"message":"success"};
    
    return this.http.post(`${this.baseUrl}`,data)
  }

}
