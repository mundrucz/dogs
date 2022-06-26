import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from 'src/app/components/dogs/list/list.component';
import { DetailsComponent } from 'src/app/components/dogs/details/details.component';
import { CreateComponent } from 'src/app/components/dogs/create/create.component';
import { EditComponent } from './components/dogs/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dogs', pathMatch: 'full' },
  { path: 'dogs', component: ListComponent },
  { path: 'dogs/details/:id', component: DetailsComponent },
  { path: 'dogs/create', component: CreateComponent },
  { path: 'dogs/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }