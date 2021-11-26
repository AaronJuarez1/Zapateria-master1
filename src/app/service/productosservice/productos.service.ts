import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

// observable library
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Zapatos, Zapatosid } from 'src/app/interfaces/zapatos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Observable<Zapatosid[]>
  collection: AngularFirestoreCollection<Zapatos>

  constructor(private firestore:AngularFirestore) {
    // en las '' va el nombre de la coleccion
    this.collection = firestore.collection('Zapateria');

    // copiar y cambiar las interfaces
    this.productos =  this.collection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const data = a.payload.doc.data() as Zapatos;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerProductos(){
    return this.productos
  }
  obtenerProducto(id:string){
    return this.collection.doc(id).snapshotChanges()
  }
  crearProductos(datos:Zapatos){
    return this.collection.add(datos)
  }
  editarProductos(id:string,data:Zapatos){
    return this.collection.doc(id).update(data)
  }
  eliminarProductos(id:string){
    return this.collection.doc(id).delete()
  }
}
