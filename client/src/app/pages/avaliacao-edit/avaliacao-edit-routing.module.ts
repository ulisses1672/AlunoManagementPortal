import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliacaoEditComponent } from './avaliacao-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacaoEditRoutingModule { }
