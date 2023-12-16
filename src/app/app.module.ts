import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckModeloComponent } from './check-modelo/check-modelo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CortarImagenesComponent } from './cortar-imagenes/cortar-imagenes.component';
import { FormImagenComponent } from './form-imagen/form-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckModeloComponent,
    NavbarComponent,
    CortarImagenesComponent,
    FormImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
