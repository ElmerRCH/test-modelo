import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckModeloComponent} from './check-modelo/check-modelo.component'

const routes: Routes = [
  {
    path: '', component: CheckModeloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
