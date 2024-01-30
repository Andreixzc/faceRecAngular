import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { RegisterService } from '../../Services/register.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

    this.registrationForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator());
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = this.registrationForm.get('password')?.value;
      const confirmPassword = control.value;
      this.passwordsMatch = password === confirmPassword;
      return this.passwordsMatch ? null : { 'passwordMismatch': true };
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.registerService.registerUser(this.registrationForm).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Registration failed:', error);

        },
      });
    } else {
      console.log('Form is invalid. Please check your inputs.');
    }
  }
}
