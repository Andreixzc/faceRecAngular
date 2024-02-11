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
    //http://localhost:9090/folder-content/list/aa584c34-7f26-423b-8d71-2bec547cf41d
    // let realToken = localStorage.getItem('token'); //use this when you have a login service.
    let jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3NjMyMjIwfQ.DM64T-c7S1d7pdJPZk43WubJsDpLkrRjeJqpBPFRkXE";
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders().set("Authorization", token);
    headers.append('Authorization', token);
    console.log(this.listFoldersUrl.replace("{folderId}", folderId));
    return this.Http.get<folderContentResponse[]>(this.listFoldersUrl.replace("{folderId}", folderId), { headers });

  }

}
