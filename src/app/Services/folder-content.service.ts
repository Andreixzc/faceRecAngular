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
    return this.Http.get<folderContentResponse[]>(this.listFoldersUrl.replace("{folderId}", folderId));

  }

}
