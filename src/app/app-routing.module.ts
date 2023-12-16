import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckModeloComponent} from './check-modelo/check-modelo.component'
import { CortarImagenesComponent } from './cortar-imagenes/cortar-imagenes.component';


const routes: Routes = [
  /*
  {
    path: '', component: CheckModeloComponent
  },*/
  {
    path: 'cortar-imagenes', component: CortarImagenesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
