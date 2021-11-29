import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/service/productosservice/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Zapatos } from 'src/app/interfaces/zapatos';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  productsForm: FormGroup
  submitted = false;
  id: string | null;
  link!: any;
  refimg!: string;
  titulo = 'Agregar Zapato';
  //fb es form builder
  //productos es por productos service
  //arpute es una ruta
  //Se le coloca el nombre a lo que estoy importando 

  constructor(private fb: FormBuilder, private productos: ProductosService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    //valida los productos dentro del form
    this.productsForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    });
    // activa la ruta dentro del id
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.editar()
  }

  AgregarEditarProducto() {
    this.submitted = true;
    if (this.productsForm.valid) {
      if (this.id == null) {
        // si la id es nula se agrega un producto
        this.agregarProducto();
      }
      else {
        //si existe la id te lleva a editarlo
        this.editarProducto(this.id);
      }

    }
  }
  agregarProducto() {
    const zapatos: Zapatos = {
      producto: this.productsForm.value.nombre,
      precio: this.productsForm.value.precio,
      info: this.productsForm.value.descripcion,
      img: this.refimg
    }

    this.productos.crearProductos(zapatos).then(() => {
      this.toastr.success('Su Zapato fue subido con exito')
    })
    this.router.navigate(['/list']);
  }
  async subirImagen(img: any) {
    const archivo = img.target.files[0];
    const nombrearchivo = archivo.name;
    //tomamos la url de nombrearchivo y se pone en link
    this.link = this.productos.urlImagen(nombrearchivo);
    //al productservice se agrega el archivo y la url
    await this.productos.crearImagen(archivo, nombrearchivo);
    //el url se descarga mediante el link y esta data se convierte en la refecencia de imagen
    await this.link.getDownloadURL().toPromise().then((data: string) => {
      this.refimg = data;
    })
  }
  //te edita el producto y lo modifica 
  editarProducto(id: string) {
    const zapatos: any = {
      producto: this.productsForm.value.nombre,
      precio: this.productsForm.value.precio,
      info: this.productsForm.value.descripcion
    }
    this.productos.editarProductos(id, zapatos).then(()=>{
      this.toastr.info('El zapato fue editado correctamente')
    })
      this.router.navigate(['/list'])
  }

  //muestra lo que esta en el list para modificarlo
  editar(){
    if(this.id !== null){
      this.titulo = 'Editar zapato'
      this.productos.obtenerProducto(this.id).subscribe(data => {
        console.log(data);
        this.productsForm.patchValue({
          nombre: data.producto,
          precio: data.precio,
          descripcion: data.info
        })
      })
    }
  }
}
