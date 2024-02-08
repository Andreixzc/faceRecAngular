import { Component, Input, OnInit, input } from '@angular/core';
import { FolderService } from '../../Services/folder.service';
import { FolderListResponse } from '../../Interfaces/folder-response';

@Component({
  selector: 'app-render-folders',
  standalone: true,
  imports: [],
  templateUrl: './render-folders.component.html',
  styleUrl: './render-folders.component.css'
})
export class RenderFoldersComponent  {
  
  constructor(private folderService: FolderService) { }
  @Input() folders : FolderListResponse[] = [];

  @Input() folderId : string = "";
  displayContent(id : string){ 
    console.log(id)
  }
 
  
}
