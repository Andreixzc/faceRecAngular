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
  
  @Input() folders : FolderListResponse[] = [];
  // constructor(private folderService: FolderService) { }
 
  // ngOnInit(): void {
  //   this.renderFolders();
  // }
  // folders : FolderListResponse[] = [];
  // renderFolders() {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3MDA2MTQ2fQ.tBdFWXYimf99eyqI_WEuMWbycVZDrCl7BHLHYUXVS6o');
  //     let jwt: string = localStorage.getItem('jwt') || '';
  //     if (jwt == '') {
  //       console.log('jwt is empty');
  //       return;
  //     }
  //     this.folderService.listAllFolders(jwt).subscribe(response => {
  //       this.folders = response; // Store the response data in 'folders' variable
  //     });
  //   } else {
  //     console.log('localStorage is not available.');
  //   }
  // }

}
