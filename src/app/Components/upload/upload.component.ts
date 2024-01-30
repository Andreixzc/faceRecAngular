import { Component, ViewChild, ElementRef } from '@angular/core';
import { UploadService } from '../../Services/upload.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  uploadForm!: FormGroup;
  file!: string;
  myFiles:string [] = [];
  successUpload :  boolean = false;

  constructor(private uploadService: UploadService, private fb: FormBuilder, private router: Router) {
    this.uploadForm = this.fb.group({
      folderName: new FormControl("",Validators.required),
      file: new FormControl(null),
      
    });
  };
  onFileSelect(event: any){
    for (var i = 0; i < event.target.files.length; i++) { 
      this.file = event.target.files[i];
      this.myFiles.push(event.target.files[i]);
    }
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
