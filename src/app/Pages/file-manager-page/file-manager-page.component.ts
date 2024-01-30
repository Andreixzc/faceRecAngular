import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { FileManagerComponent } from '../../Components/file-manager/file-manager.component';

@Component({
  selector: 'app-file-manager-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, FileManagerComponent],
  templateUrl: './file-manager-page.component.html',
  styleUrl: './file-manager-page.component.css'
})
export class FileManagerPageComponent {

}
