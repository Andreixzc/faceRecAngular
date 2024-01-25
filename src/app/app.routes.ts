import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UploadPageComponent } from './Pages/upload-page/upload-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
export const routes: Routes = [
    {
      path: '',
      component:HomePageComponent
    },
    {
      path: 'upload',
      component:UploadPageComponent
    },
    {
      path: 'register',
      component: RegisterPageComponent
    },
    {
      path: 'login',
      component: LoginPageComponent
    }
  ];