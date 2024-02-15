import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FolderListResponse } from '../Interfaces/folder-response';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private Http: HttpClient) { }

  folderListUrl: string = "http://localhost:9090/folder/list";
  folderDeleteUrl: string = "http://localhost:9090/folder/{id}";
  // jwt: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiNzM1YTAwMDItNTFkOC00NjFjLTkzNTItYmU0OGI5NzE2ODhhIiwiZXhwIjoxNzA2MjkwMzUyfQ.Nvg6duMSoptC4n3didH0cimR3ul6t5dQee9olQNBpuM";

  listAllFolders(jwt: string) {

    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders().set("Authorization", token);
    return this.Http.get<FolderListResponse[]>(this.folderListUrl, { headers });
    // return this.Http.get(this.folderListUrl, { headers });


  }
  deleteFolder(jwt: string, id: string) {
    const token = `Bearer ${jwt}`;
    const headers = new HttpHeaders().set("Authorization", token);
    return this.Http.delete(this.folderDeleteUrl.replace("{id}", id), { headers });
  }
}
