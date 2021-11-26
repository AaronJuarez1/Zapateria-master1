import { EditarComponent } from './pagina/editar/editar.component';
import { DetalleComponent } from './pagina/detalle/detalle.component';
import { NuevoComponent } from './pagina/nuevo/nuevo.component';
import { ListComponent } from './pagina/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ContactoComponent } from './pagina/contacto/contacto.component';
import { ProductosComponent } from './pagina/productos/productos.component';

const routes: Routes = [
  {
    path:"list",component:ListComponent
  },
  {
    path:"Nuevo",component:NuevoComponent
  },
  {
    path:"detalle",component:DetalleComponent
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
    path:"editar/:id",component:EditarComponent
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
