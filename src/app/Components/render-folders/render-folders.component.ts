import { Component, Input, OnInit, input } from '@angular/core';
import { FolderService } from '../../Services/folder.service';
import { FolderListResponse } from '../../Interfaces/folder-response';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { event } from 'jquery';

@Component({
  selector: 'app-render-folders',
  standalone: true,
  imports: [DropdownModule,FormsModule],
  templateUrl: './render-folders.component.html',
  styleUrl: './render-folders.component.css'
})
export class RenderFoldersComponent  {
  
  selectedCity: string = '';
  cities: any[] = ['new york', 'rio de janeiro', 'paris', 'berlin', 'london', 'madrid', 'lisbon', 'amsterd'];
  dropdownOpen: boolean = false;
  @Input() folders: FolderListResponse[] = [];
  folderIdTodisplayContent: string = ''; // Definindo a propriedade para o folderId

  constructor(private folderService: FolderService, private router: Router) { }

  displayContent(id: string) {
    this.folderIdTodisplayContent = id; // Atualizando o folderIdTodisplayContent
    console.log(this.folderIdTodisplayContent);
    this.router.navigate(['/folder-content-page/:folderId'], { state: { folderId: this.folderIdTodisplayContent } });
  }
  caralho($event : any) {
    console.log($event);
    const dropDown = document.getElementById('dropdownMenuButton');
    console.log(dropDown)
    //show dropdown:
    dropDown?.classList.toggle('show');
    console.log(dropDown)
  }
 
  
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
