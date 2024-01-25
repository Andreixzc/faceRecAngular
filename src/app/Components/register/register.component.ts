import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registrationForm!: FormGroup;
  passwordsMatch: boolean = false;

  constructor(private fb: FormBuilder, private registerService : RegisterService) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    this.registrationForm.get('confirmPassword')?.setValidators( this.passwordMatchValidator());
  }

  // passwordMatchValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const password = this.registrationForm.get('password')?.value;
  //     const confirmPassword = control.value;
  //     return password === confirmPassword ? null : { 'passwordMismatch': true };
  //   };
  // }
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = this.registrationForm.get('password')?.value;
      const confirmPassword = control.value;
  
      // Verifica se as senhas são iguais
      this.passwordsMatch = password === confirmPassword;
  
      // Retorna o objeto de erro se as senhas não coincidirem
      return this.passwordsMatch ? null : { 'passwordMismatch': true };
    };
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      
      console.log('Form submitted:', this.registrationForm.value);
      this.registerService.registerUser(this.registrationForm).subscribe(response => {});
    } else {
      console.log('Form is invalid. Please check your inputs.');
    }
    
  }
}
