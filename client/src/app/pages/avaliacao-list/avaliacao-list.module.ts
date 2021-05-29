import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoListComponent } from './avaliacao-list.component';
import { AvaliacaoListRoutingModule } from './avaliacao-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AvaliacaoListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AvaliacaoListComponent
  ]
})
export class AvaliacaoListModule { }
