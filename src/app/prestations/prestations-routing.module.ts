import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { DetailsComponent } from './components/details/details.component';
import { CommentsComponent } from './components/comments/comments.component';


const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent,
    data: { title: 'Prestations', subtitle: 'Toutes les prestations' },
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'comments',
        component: CommentsComponent
      }
    ]
  },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: { title: 'Prestations', subtitle: 'Ajouter une prestation' }
  },
  {
    path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: { title: 'Prestations', subtitle: 'Editer une prestation' }
  }
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
