import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

// observable library
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Zapatos, Zapatosid } from 'src/app/interfaces/zapatos';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Observable<Zapatosid[]>
  collection: AngularFirestoreCollection<Zapatos>
  storageRef: AngularFireStorageReference;

  constructor(private firestore:AngularFirestore, private storage:AngularFireStorage) {
    // en las '' va el nombre de la coleccion
    this.collection = firestore.collection<Zapatosid>('Zapateria');
    //se toma como referencia en storageref la carpeta izapatos 
    this.storageRef = storage.ref('izapatos')
    // copiar y cambiar las interfaces
    this.productos =  this.collection.snapshotChanges().pipe(
      map(a => a.map(a => {
        const data = a.payload.doc.data() as Zapatos;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerProductos(): Observable<any>{
    return this.productos
  }
  obtenerProducto(id:string): Observable<any>{
    return this.collection.doc(id).snapshotChanges().pipe(
      map(a=>{
        const id=a.payload.id;
        const data=a.payload.data() as Zapatos;
        return {id,...data}
      })
    )
  }
  crearProductos(datos:Zapatos): Promise<any>{
    return this.collection.add(datos)

  }
  editarProductos(id:string,data:Zapatos){
    console.log(data);
    return this.collection.doc(id).update(data)
  }
  eliminarProductos(id:string){
    return this.collection.doc(id).delete()
  }
}
