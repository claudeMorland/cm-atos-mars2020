import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';


const appRoutes: Routes = [
  { path: '', component: PageClientsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
