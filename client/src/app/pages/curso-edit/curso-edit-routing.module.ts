import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoEditComponent } from './curso-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CursoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoEditRoutingModule { }
