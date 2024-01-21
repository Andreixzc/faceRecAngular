import { Component, ViewChild, ElementRef } from '@angular/core';
import { UploadService } from '../../Services/upload.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  constructor(private uploadService: UploadService) { };

  @ViewChild('fileInput') fileInput!: ElementRef;


  onFileChange(event: any) {
    const files = event.target.files;
    this.handleFiles(files);
  }

  onDrop(event: any) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.handleFiles(files);
  }

  preventDefaults(event: any) {
    event.preventDefault();
    event.stopPropagation();
  }

  highlight() {
    // Adicione estilos de destaque ao arrastar sobre a área de soltar
  }

  unhighlight() {
    // Remova estilos de destaque quando o arrastar sai da área de soltar
  }

  handleFiles(files: FileList) {
    // Manipule os arquivos enviados aqui
  }

  submitForm(event: any) {
    event.preventDefault();

    const files = this.fileInput.nativeElement.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
    this.uploadService.postImages(formData).subscribe(response => {
      console.log(formData);

    });
  }

}
