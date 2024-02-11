import { Component, Input, OnInit, input } from '@angular/core';
import { FolderContentService } from '../../Services/folder-content.service';
import {folderContentResponse } from '../../Interfaces/folder-content-response';

@Component({
  selector: 'app-render-folder-content',
  standalone: true,
  imports: [],
  templateUrl: './render-folder-content.component.html',
  styleUrl: './render-folder-content.component.css'
})
export class RenderFolderContentComponent implements OnInit {
  folderContent: folderContentResponse[] = [];

  @Input() folderIdDisplay: string = '';

  constructor(private folderContentService: FolderContentService) {
  }
  ngOnInit(): void {
    this.listContent();
  }
  
  listContent() {
    console.log("PRINTANDO FUNCAO: " + this.folderIdDisplay)
    this.folderContentService.list(this.folderIdDisplay).subscribe((data) => {
      this.folderContent = data;
    });
  }
}
