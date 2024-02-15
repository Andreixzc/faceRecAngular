import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { folderContentResponse } from '../Interfaces/folder-content-response';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class FindMatcheService {

  constructor(private Http: HttpClient) { }

  findMatchUrl: string = "http://localhost:9090/s3/ref";

  find(formData: FormData) {
    return this.Http.post<folderContentResponse[]>(this.findMatchUrl, formData);
  }
}
