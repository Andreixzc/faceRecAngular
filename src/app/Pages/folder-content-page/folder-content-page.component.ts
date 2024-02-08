import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FolderCrudComponent } from "../../Components/folder-crud/folder-crud.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { RenderFolderContentComponent } from '../../Components/render-folder-content/render-folder-content.component';
import { RenderFoldersComponent } from '../../Components/render-folders/render-folders.component';
import { FaceMatcherComponent } from '../../Components/face-matcher/face-matcher.component';
import { UploadComponent } from '../../Components/upload/upload.component';

@Component({
    selector: 'app-folder-content-page',
    standalone: true,
    templateUrl: './folder-content-page.component.html',
    styleUrl: './folder-content-page.component.css',
    imports: [NavbarComponent, FolderCrudComponent, FooterComponent,RenderFolderContentComponent,RenderFoldersComponent,FaceMatcherComponent,UploadComponent]
})
export class FolderContentPageComponent implements OnInit {


  folderIdTodisplayContent : string = "";
  ngOnInit(): void {
      console.log(this.folderIdTodisplayContent)
  }

  
  
  
}


