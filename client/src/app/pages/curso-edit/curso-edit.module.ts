import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoEditComponent } from './curso-edit.component';
import { CursoEditRoutingModule } from './curso-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CursoEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CursoEditComponent
  ]
})
export class CursoEditModule { }
