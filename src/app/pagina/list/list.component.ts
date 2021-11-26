import { ProductosService } from './../../service/productosservice/productos.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Zapatosid } from 'src/app/interfaces/zapatos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  productos: Zapatosid[] = [];
  constructor(private router: Router, private productosServices: ProductosService) {
    this.productosServices.obtenerProductos().subscribe(a => {
      this.productos = a;
    })
  }

  ngOnInit(): void {
  }

  onGoToEditar(id: string): void {
    this.router.navigate(['editar', id]);
  }


  onGoToInfo(item: any): void {
    this.router.navigate(['detalle']);
  }

  onGoToEliminar(item: any): void {
    alert('Eliminado');
  }

}
