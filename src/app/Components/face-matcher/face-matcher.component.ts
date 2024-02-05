import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UploadService } from '../../Services/upload.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FolderListResponse } from '../../Interfaces/folder-response';
import { NgClass } from '@angular/common';
import { FindMatcheService } from '../../Services/find-matche.service';
@Component({
  selector: 'app-face-matcher',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './face-matcher.component.html',
  styleUrl: './face-matcher.component.css'
})
export class FaceMatcherComponent {
  @ViewChild('myModal') myModal!: ElementRef;


  @Input() folders: FolderListResponse[] = [];
  teste: boolean = false;
  uploadForm!: FormGroup;
  file!: string;
  myFiles: string[] = [];
  successUpload: boolean = false;

  folderPathToBeSearched = "";

  constructor(private fb: FormBuilder, private router: Router,private findMatchesService : FindMatcheService) {
    this.uploadForm = this.fb.group({
      folderName: new FormControl("", Validators.required),
      file: new FormControl(null),

    });
  };
  onFileSelect(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.file = event.target.files[i];
      this.myFiles.push(event.target.files[i]);
    }
  }
  openModal() {
    const modal = document.getElementById('myModal');
    if (modal && !modal.classList.contains('show')) {
        modal.classList.add('show');
        modal.style.display = 'block';
    }
}

closeModal() {
  const modal = document.getElementById('myModal');
  console.log(modal)
  if (modal && modal.classList.contains('show')) {
      modal.classList.remove('show');
      modal.style.display = 'none';
  }
}

getFolderPath(name: string){
this. folderPathToBeSearched = name;
console.log(this.folderPathToBeSearched)
}

  onSubmit() {
    const formData = new FormData();
    formData.append('folderPath', this.folderPathToBeSearched);
    for (let i = 0; i < this.myFiles.length; i++) {
      formData.append("file", this.myFiles[i]);
    }
    console.log("entrou")
    this.findMatchesService.find(formData).subscribe(
      (response) => {
        this.successUpload = true;
        console.log(response);
        // this.router.navigate(['/file-manager']);
        //validar se a response estiver vazia, se estiver, mostrar uma mensagem de que não foi encontrado nenhum match
        //caso encontrar, redirecionar para uma nova pagina para mostrar os matches
      },
      (error) => {
        this.successUpload = false;
        console.error("Erro ao fazer upload:", error);
      }
    );
  }
 
}
