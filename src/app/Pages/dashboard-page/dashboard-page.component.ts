import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { RenderFoldersComponent } from '../../Components/render-folders/render-folders.component';
import { FolderCrudComponent } from '../../Components/folder-crud/folder-crud.component';
import { UploadComponent } from '../../Components/upload/upload.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RenderFoldersComponent,FolderCrudComponent,UploadComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
