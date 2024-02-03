import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UploadService } from '../../Services/upload.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FolderListResponse } from '../../Interfaces/folder-response';
import { NgClass } from '@angular/common';
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

  folderToBeSearched = "";

  constructor(private uploadService: UploadService, private fb: FormBuilder, private router: Router) {
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

getFolderName(name: string){
this. folderToBeSearched = name;
console.log(this.folderToBeSearched)
}

  onSubmit() {
    const formData = new FormData();
    formData.append('folderName', this.uploadForm.get('folderName')?.value);

    for (let i = 0; i < this.myFiles.length; i++) {
      formData.append("file", this.myFiles[i]);
    }

    this.uploadService.postImages(formData).subscribe(
      (response) => {
        this.successUpload = true;
        this.router.navigate(['/file-manager']);
      },
      (error) => {
        this.successUpload = false;
        console.error("Erro ao fazer upload:", error);
      }
    );
  }
}
