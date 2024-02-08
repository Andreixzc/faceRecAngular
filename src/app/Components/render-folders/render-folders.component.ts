import { Component, Input, OnInit, input } from '@angular/core';
import { FolderService } from '../../Services/folder.service';
import { FolderListResponse } from '../../Interfaces/folder-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-render-folders',
  standalone: true,
  imports: [],
  templateUrl: './render-folders.component.html',
  styleUrl: './render-folders.component.css'
})
export class RenderFoldersComponent  {
  
  constructor(private folderService: FolderService,private router: Router) { }
  @Input() folders : FolderListResponse[] = [];

  @Input() folderId : string = "";
  displayContent(id : string){ 
    this.folderId = id;
    this.router.navigate(['/folder-content-page']);
  }
 
  
}
