import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { UploadComponent } from '../../Components/upload/upload.component';

@Component({
  selector: 'app-upload-page',
  standalone: true,
  imports: [NavbarComponent,UploadComponent,FooterComponent],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.css'
})
export class UploadPageComponent {

}
