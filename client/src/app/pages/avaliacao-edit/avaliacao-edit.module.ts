import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoEditComponent } from './avaliacao-edit.component';
import { AvaliacaoEditRoutingModule } from './avaliacao-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    AvaliacaoEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AvaliacaoEditComponent
  ]
})
export class AvaliacaoEditModule { }
