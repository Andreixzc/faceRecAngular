import { Component, Input, input } from '@angular/core';
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
  folderContent: folderContentResponse[] = [];

  @Input() folderId: string = '';

  constructor(private folderContentService: FolderContentService) {
    this.listContent();
  }

  listContent() {
    console.log("Printando id: " + this.folderId)
    this.folderContentService.list(this.folderId).subscribe((data) => {
      this.folderContent = data;
    });
  }
}
