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
    
    
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiMjMxOWUxMGEtMDc0NC00ZGVlLWI5MDctZTg1Y2U0OWY2MmEyIiwiZXhwIjoxNzA2NjAxMDQ0fQ.n00xfLbXt53uqa4x0SPzjG4xBL8hwS3K7QZ8MwJdTzU";
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders()
    .set("Authorization", token)
    // .set("Content-Type", "multipart/form-data");

    return this.http.post<UploadResponse>(this.postImageUrl, formData, { headers });
  }
}
