import { ProductosService } from './../../service/productosservice/productos.service';
import { Component, OnInit } from '@angular/core';
import { Zapatosid } from 'src/app/interfaces/zapatos';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: Zapatosid[] = [];
  constructor(private productosServices: ProductosService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.productosServices.obtenerProductos().subscribe(a => {
      this.productos = a;
    })
  }

  EliminarProducto(id: string){
    this.productosServices.eliminarProductos(id).then(()=>{
      this.toastr.error('El zapato fue eliminado Correctamente')
    })
  }
  mostrar(){
    console.log(this.productos)

  }
}
