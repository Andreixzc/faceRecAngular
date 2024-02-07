import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderContentService {


  constructor(private Http: HttpClient) { }

  listFoldersUrl: string = "http://localhost:9090/folder-content/list/{folderId}";

}
