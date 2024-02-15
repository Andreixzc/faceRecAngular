import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { error } from 'console';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  invalidCredentials: boolean = false;

  // constructor(private fb: FormControl, private loginService: LoginService, private router: FormControl) {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', [Validators.required])
  //   })
  // }
  constructor(private fb: FormBuilder, private loginService: LoginService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm).subscribe({
        next: response => {
          
          console.log('Login successful:', response);
          //redirecionar para homepage e armazenar a response no local storage.
          localStorage.setItem('jwt', response.token);
          this.router.navigate(['/file-dashboard']);
        },
        error: error => {
          console.error('Login failed:', error);
          this.invalidCredentials = true;
        }
      }

      );
    }
    else {
      console.log('Form is invalid. Please check your inputs.');
    }
  }

}
