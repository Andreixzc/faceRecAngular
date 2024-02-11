import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { UploadPageComponent } from './Pages/upload-page/upload-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { DashboardPageComponent } from './Pages/dashboard-page/dashboard-page.component';
import { FolderContentPageComponent } from './Pages/folder-content-page/folder-content-page.component';
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
    },
    {
      path: 'file-dashboard',
      component: DashboardPageComponent
    },
    {
      path: 'folder-content-page/:folderId',
      component: FolderContentPageComponent
    }
  ];