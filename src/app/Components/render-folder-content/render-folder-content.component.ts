import { Component } from '@angular/core';
import { MatchesResponse } from '../../Interfaces/matches-response';

@Component({
  selector: 'app-render-folder-content',
  standalone: true,
  imports: [],
  templateUrl: './render-folder-content.component.html',
  styleUrl: './render-folder-content.component.css'
})
export class RenderFolderContentComponent {

  content : MatchesResponse[] = [];
}
