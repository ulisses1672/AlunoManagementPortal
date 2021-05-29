import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliacaoListComponent } from './avaliacao-list.component';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliacaoListRoutingModule { }
