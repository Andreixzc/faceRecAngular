import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { folderContentResponse } from '../Interfaces/folder-content-response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerUrl = "http://localhost:9090/user";

  registerUser(formGroup: FormGroup) {
    formGroup.removeControl('confirmPassword');
    const options = { headers: new HttpHeaders({ 'skipAuthCheck': 'true' }) };
    return this.http.post<folderContentResponse>(this.registerUrl,formGroup.value,options);
  }


}

