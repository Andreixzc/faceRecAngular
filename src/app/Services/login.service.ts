import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http: HttpClient) { }

  loginUrl = "http://localhost:9090/user/login";


  loginUser(formGroup: FormGroup) {
    return this.Http.post(this.loginUrl, formGroup.value)//should return a jwt token
  }
 
}
