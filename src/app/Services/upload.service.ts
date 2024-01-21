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
    formData.append("id","3b79090b-94ea-49ce-a559-fe5a88e42b5c") //mock data for testing
    console.log(formData)
    return this.http.post<UploadResponse>(this.postImageUrl,formData);
  }
}
