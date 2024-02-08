import { Component, input } from '@angular/core';
import { FolderContentService } from '../../Services/folder-content.service';
import {folderContentResponse } from '../../Interfaces/folder-content-response';

@Component({
  selector: 'app-render-folder-content',
  standalone: true,
  imports: [],
  templateUrl: './render-folder-content.component.html',
  styleUrl: './render-folder-content.component.css'
})
export class RenderFolderContentComponent {

  folderContent !: folderContentResponse;

  folderId: string = "";

  constructor(private FolderContentService: FolderContentService) {
    this.listContent();
  }
  listContent() {
    this.FolderContentService.list(this.folderId).subscribe((data) => {
      this.folderContent = data;
    });
  }	
}
