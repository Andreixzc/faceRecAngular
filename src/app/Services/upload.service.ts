import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadResponse } from '../Interfaces/upload-response';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }
  postImageUrl = "http://localhost:9090/s3/upload";

  postImages(formData: FormData) {
    
    
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3MjI4MjI1fQ.gKJxToQIDw0TfOcM1nLY29pzDlm5ej_5ukr8whkLLZM";
    // let realToken = localStorage.getItem('token'); //use this when you have a login service. 
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders()
    .set("Authorization", token)
    // .set("Content-Type", "multipart/form-data");

    return this.http.post<UploadResponse>(this.postImageUrl, formData, { headers });
  }
}
