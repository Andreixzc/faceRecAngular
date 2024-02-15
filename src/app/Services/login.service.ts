import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ILoginResponse } from '../Interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http: HttpClient) { }

  loginUrl = "http://localhost:9090/user/login";


  loginUser(formGroup: FormGroup) {
    const options = { headers: new HttpHeaders({ 'skipAuthCheck': 'true' }) };
    return this.Http.post<ILoginResponse>(this.loginUrl, formGroup.value, options);
    // return this.Http.post(this.loginUrl, formGroup.value, options)
  }
 
}
