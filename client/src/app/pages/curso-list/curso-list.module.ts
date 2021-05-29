import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './curso-list.component';
import { CursoListRoutingModule } from './curso-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CursoListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CursoListComponent
  ]
})
export class CursoListModule { }
