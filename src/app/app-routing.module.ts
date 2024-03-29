import { EditarComponent } from './pagina/editar/editar.component';
import { DetalleComponent } from './pagina/detalle/detalle.component';
import { ListComponent } from './pagina/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { NuevoComponent } from './pagina/nuevo/nuevo.component';
import { SobreComponent } from './pagina/sobre/sobre.component';
import { PreguntasComponent } from './pagina/preguntas/preguntas.component';
import { LoginComponent } from './auth/login/login.component';
import { CatalogoComponent } from './pagina/catalogo/catalogo.component';
import { EditpreComponent } from './pagina/editpre/editpre.component';

const routes: Routes = [
  {
    path:"list",component:ListComponent
  },
  {
    path:"catalogo",component:CatalogoComponent
  },
  {
    path:"nuevo",component:NuevoComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"detalle",component:DetalleComponent
  },
  {
    path:"sobre",component:SobreComponent
  },
  {
    path:"preguntas",component:PreguntasComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"editar/:id",component:NuevoComponent
  },
  {
    path:"editpre/:id",component:EditpreComponent
  },
  {
    path:'', redirectTo:'inicio', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
