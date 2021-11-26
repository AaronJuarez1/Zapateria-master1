


import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { ListComponent } from './pagina/list/list.component';
import { NuevoComponent } from './pagina/nuevo/nuevo.component';
import { DetalleComponent } from './pagina/detalle/detalle.component';
import { EditarComponent } from './pagina/editar/editar.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListComponent,
    NuevoComponent,
    DetalleComponent,
    EditarComponent,
    InicioComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
