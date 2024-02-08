import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RenderFoldersComponent } from '../../Components/render-folders/render-folders.component';
import { FolderCrudComponent } from '../../Components/folder-crud/folder-crud.component';
import { UploadComponent } from '../../Components/upload/upload.component';
import { FaceMatcherComponent } from '../../Components/face-matcher/face-matcher.component';
import { FolderListResponse } from '../../Interfaces/folder-response';
import { FolderService } from '../../Services/folder.service';
import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RenderFoldersComponent, FolderCrudComponent, UploadComponent, FaceMatcherComponent,RenderFoldersComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {

  constructor(private folderService: FolderService) { }

  ngOnInit(): void {
    this.renderFolders()
  

  }
  foldersReq: FolderListResponse[] = [];
  renderFolders() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGYWNlUmVjIiwic3ViIjoiYmJlMGJhNTAtYTNlOC00ZjUzLWIxMGYtMjA0NTkzNDdjMGY1IiwiZXhwIjoxNzA3NDA3NjAwfQ.wxxmsXKXEsyXPRNKxb1O2xc3XS_1JI7kQMuXlKELM3s');
      let jwt: string = localStorage.getItem('jwt') || '';
      if (jwt == '') {
        console.log('jwt is empty');
        return;
      }
      this.folderService.listAllFolders(jwt).subscribe(response => {
        this.foldersReq = response; // Store the response data in 'folders' variable
        console.log(response)
      });
    } else {
      console.log('localStorage is not available.');
    }
  }
}
