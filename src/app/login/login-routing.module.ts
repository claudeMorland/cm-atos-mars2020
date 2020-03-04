import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';


const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent }
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
