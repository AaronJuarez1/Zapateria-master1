import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/service/productosservice/productos.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  public products = [
    {
      id: "abcd",
      nombre: "El bolson",
      imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fmassichiquito&psig=AOvVaw1WJiCeuCJPhOsxaebkxgBy&ust=1638137916143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCX07zJufQCFQAAAAAdAAAAABAD",
      descripcion: "nashe nashe nashe",
    }
  ]
  public productsForm: FormGroup
  pUpload!: Observable<number | undefined>
  urlImage!: Observable<string>
  constructor(private fb: FormBuilder, private storage: AngularFireStorage) {
    this.productsForm = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]

    })
  }

  ngOnInit(): void {
  }

  editarProductos(p: any) {
    const { nombre, descripcion } = p
    this.productsForm.setValue({nombre, descripcion})
  }
  eliminarProductos(idProduct:string){
    let c=confirm ("Queres eliminar el producto")
    if(c){
      confirm("tas seguraso")
    }
  }
}
