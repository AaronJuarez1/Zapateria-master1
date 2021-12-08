import { Component, OnInit } from '@angular/core';
import { Zapatos } from 'src/app/interfaces/zapatos';
import { ProductosService } from 'src/app/service/productosservice/productos.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos!: Zapatos[]

  constructor(private zapatillas: ProductosService) {

   }

  ngOnInit(): void {
    
    this.zapatillas.obtenerProductos().subscribe(resp =>{
      this.productos = resp
    })
  }

}
