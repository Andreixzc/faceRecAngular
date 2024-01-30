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
    
    
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiMmNlMWQzZTgtMGIwZS00ZTZkLWI0MTYtMjJmNmNmMzAxZjA0IiwiZXhwIjoxNzA2NjE4NjQ2fQ.RvODadygt1YQH0IZd6rJaB249kZMVg2YhwWs9G4KzBk";
    // let realToken = localStorage.getItem('token'); //use this when you have a login service. 
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders()
    .set("Authorization", token)
    // .set("Content-Type", "multipart/form-data");

    return this.http.post<UploadResponse>(this.postImageUrl, formData, { headers });
  }
}
