import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerUrl = "http://localhost:9090/user";

  registerUser(formGroup: FormGroup) {
    formGroup.removeControl('confirmPassword');
    return this.http.post(this.registerUrl, formGroup.value)
  }


}

