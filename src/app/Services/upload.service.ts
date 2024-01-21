import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UploadResponse } from '../Interfaces/upload-response';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }
  postImageUrl = "http://localhost:9090/s3/upload";

  postImages(formData: FormData) {
    formData.append("folderName","caralho") //mock data for testing
    formData.append("id","a90ceb0c-5956-4d01-a712-465322c382b4") //mock data for testing
    console.log(formData)
    return this.http.post<UploadResponse>(this.postImageUrl,formData);
  }
}
