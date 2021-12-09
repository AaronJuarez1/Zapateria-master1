import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Preguntas, Preguntasid } from 'src/app/interfaces/preguntas';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  preguntas: Observable<Preguntasid[]>
  collection: AngularFirestoreCollection<Preguntas>

  constructor(private firestore: AngularFirestore) {

    this.collection = firestore.collection<Preguntasid>('preguntasf');

    this.preguntas =  this.collection.snapshotChanges().pipe(
      // obtiene la informacion de los productos
      map(a => a.map(a => {
        const data = a.payload.doc.data() as Preguntas;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  obtenerPreguntas(): Observable<any> {
    return this.preguntas
  }
  obtenerPregunta(id: string): Observable<any> {
    return this.collection.doc(id).snapshotChanges().pipe(
      map(a => {
        const id = a.payload.id;
        const data = a.payload.data() as Preguntas;
        return { id, ...data }
      })
    )
  }
  crearPregunta(datos: Preguntas): Promise<any> {
    return this.collection.add(datos)
  }
  editarPregunta(id: string, data: Preguntas) {
    return this.collection.doc(id).update(data)
  }
  eliminarPregunta(id: string) {
    return this.collection.doc(id).delete()
  }
}
