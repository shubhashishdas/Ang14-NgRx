import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/component/login.component';
import { RegisterComponent } from './modules/auth/component/register.component';
import { DashboardComponent } from './modules/dashboard/component/dashboard.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'web-series',
        loadChildren: () => import('./modules/web-series/web-series.module').then(m => m.WebSeriesModule)
      },
      {
        path: '',
        title: 'Dashboard',
        component: DashboardComponent,
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
