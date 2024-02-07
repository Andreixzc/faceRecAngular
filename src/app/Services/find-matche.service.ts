import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { MatchesResponse } from '../Interfaces/matches-response';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class FindMatcheService {

  constructor(private Http: HttpClient) { }

  findMatchUrl: string = "http://localhost:9090/s3/ref";

  find(formData: FormData) {
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3MzEzNTM0fQ.XQUk1pG0MZYTTgh3WVT3XRwhnafUVVYIV-n02Y4eGSU";
    // let realToken = localStorage.getItem('token'); //use this when you have a login service. 
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders()
    .set("Authorization", token)
    //enviar boolean (loading)
    
    return this.Http.post<MatchesResponse[]>(this.findMatchUrl, formData, { headers });
  }
}
