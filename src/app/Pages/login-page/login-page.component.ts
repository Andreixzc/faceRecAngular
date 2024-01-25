import { Component } from '@angular/core';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { LoginComponent } from '../../Components/login/login.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,LoginComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
