import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.authState
  }

  /* 
  METODO PARA INICIAR SESION 
  PARAMETROS NECESARIOS
  */

  login(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  /*
  METODO PARA CERRAR SESION
  PARAMETROS NECESARIOS (QUE ESTAN DENTRO DEL PARENTESIS)
  */

  LogOut() {
    this.auth.signOut();
  }

  // si logea o no 
  currentUser() {
    this.auth.authState;
  }
}
