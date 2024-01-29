import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../Services/folder.service';
import { FolderListResponse } from '../../Interfaces/folder-response';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css'
})
export class FileManagerComponent implements OnInit {

  constructor(private folderService: FolderService) { }
 
  ngOnInit(): void {
    this.renderFolders();
  }
  folders : FolderListResponse[] = [];
  renderFolders() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiNzQ3MjUyMmUtMzEyMC00MjA1LWEzMWItYTA2MDA4NDMyMTA4IiwiZXhwIjoxNzA2NTE2NjI1fQ.ITLBERlkpSLZV7USu-hsS-qtySAyR5QxG-2OJIpF4Ng');
      let jwt: string = localStorage.getItem('jwt') || '';
      if (jwt == '') {
        console.log('jwt is empty');
        return;
      }
      this.folderService.listAllFolders(jwt).subscribe(response => {
        this.folders = response; // Store the response data in 'folders' variable
      });
    } else {
      console.log('localStorage is not available.');
    }
  }
  
}




