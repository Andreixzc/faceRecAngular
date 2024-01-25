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
    console.log("dassda")
    formGroup.removeControl('confirmPassword');
    console.log(formGroup.value);
    return this.http.post(this.registerUrl, formGroup.value)
  }


}

