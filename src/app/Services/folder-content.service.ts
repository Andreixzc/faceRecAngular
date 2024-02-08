import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FolderListResponse } from '../Interfaces/folder-response';
import { folderContentResponse } from '../Interfaces/folder-content-response';

@Injectable({
  providedIn: 'root'
})
export class FolderContentService {


  constructor(private Http: HttpClient) { }

  listFoldersUrl: string = "http://localhost:9090/folder-content/list/{folderId}";

  list(folderId: string) {
    
    // let realToken = localStorage.getItem('token'); //use this when you have a login service.
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3NDA3NjAwfQ.wxxmsXKXEsyXPRNKxb1O2xc3XS_1JI7kQMuXlKELM3s";
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders().set("Authorization", token);
    headers.append('Authorization', token);
    console.log("Caralho"+folderId)
    console.log(this.listFoldersUrl.replace("{folderId}", folderId));
    return this.Http.get<folderContentResponse[]>(this.listFoldersUrl.replace("{folderId}", folderId), { headers });

  }

}
