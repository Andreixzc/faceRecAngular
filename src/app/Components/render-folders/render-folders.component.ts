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
  
  @Input() folders: FolderListResponse[] = [];
  folderIdTodisplayContent: string = ''; // Definindo a propriedade para o folderId

  constructor(private folderService: FolderService, private router: Router) { }

  displayContent(id: string) {
    this.folderIdTodisplayContent = id; // Atualizando o folderIdTodisplayContent
    console.log(this.folderIdTodisplayContent);
    this.router.navigate(['/folder-content-page/:folderId'], { state: { folderId: this.folderIdTodisplayContent } });
  }
  caralho(){
    console.log("hue")
  }
 
  
}
