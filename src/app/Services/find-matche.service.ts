import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root'
})
export class FindMatcheService {

  constructor(private Http: HttpClient) { }

  findMatchUrl: string = "http://localhost:9090/s3/ref";

  find(formData: FormData) {
    console.log("xd")
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3MjI4MjI1fQ.gKJxToQIDw0TfOcM1nLY29pzDlm5ej_5ukr8whkLLZM";
    // let realToken = localStorage.getItem('token'); //use this when you have a login service. 
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders()
    .set("Authorization", token)
    //enviar boolean (loading)
    return this.Http.post(this.findMatchUrl, formData, { headers });
  }
}
