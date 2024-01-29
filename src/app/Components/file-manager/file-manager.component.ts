import { Component, OnInit } from '@angular/core';
import { FolderService } from '../../Services/folder.service';

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
  renderFolders() {
    let jwt: string = localStorage.getItem('jwt') || '';
    if (jwt == '') {
      console.log('jwt is empty');
      return;
    }
    return this.folderService.listAllFolders(jwt).subscribe(response => console.log(response));
  }



}
