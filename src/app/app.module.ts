import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

/* COMPONENTES */
import { SobreComponent } from './pagina/sobre/sobre.component';
import { PreguntasComponent } from './pagina/preguntas/preguntas.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { ListComponent } from './pagina/list/list.component';
import { NuevoComponent } from './pagina/nuevo/nuevo.component';
import { DetalleComponent } from './pagina/detalle/detalle.component';
import { EditarComponent } from './pagina/editar/editar.component';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';




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
    SobreComponent,
    PreguntasComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({}),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
