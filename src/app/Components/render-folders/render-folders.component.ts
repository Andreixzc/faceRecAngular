import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../Services/folder.service';
import { FolderListResponse } from '../../Interfaces/folder-response';

@Component({
  selector: 'app-render-folders',
  standalone: true,
  imports: [],
  templateUrl: './render-folders.component.html',
  styleUrl: './render-folders.component.css'
})
export class RenderFoldersComponent implements OnInit {
  constructor(private folderService: FolderService) { }
 
  ngOnInit(): void {
    this.renderFolders();
  }
  folders : FolderListResponse[] = [];
  renderFolders() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiODUxZmZkMGQtZDBmOS00OTk0LThiZjgtOTdkMTNkNDNjMDY4IiwiZXhwIjoxNzA2ODY0ODU1fQ.ac7ApI9TKzu1UgldyKiLHky0e5GQn74t25UnhlZUrNM');
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
