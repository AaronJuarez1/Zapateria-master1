import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 
    //Inicializo mi formulario 
    this.formularioLogin = fb.group({
      username:['', [Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    //Se corrobora si el formulario es correcto
    if(!this.formularioLogin.invalid){

      //se obtienen los datos del formulario
      const {username, password} = this.formularioLogin.value;
      //inicia sesion de firebase 
      this.auth.login(username, password).then((resp)=>{
        alert("Iniciaste sesion de forma correcta");
        this.router.navigateByUrl("nuevo")
      }).catch(error=>{
        alert("Su Email no es correcto, Por favor vuelva a intentar")
      })
    }
    else{
      alert("Verifique si su Email es Valido");
    }
  }
}
