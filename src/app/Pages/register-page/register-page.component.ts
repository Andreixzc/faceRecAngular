import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { RegisterComponent } from "../../Components/register/register.component";

@Component({
    selector: 'app-register-page',
    standalone: true,
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css',
    imports: [FooterComponent, NavbarComponent, RegisterComponent]
})
export class RegisterPageComponent {

}
