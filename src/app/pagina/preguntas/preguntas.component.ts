import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Preguntasid } from 'src/app/interfaces/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';



@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntasf!: Preguntasid[]
  user: any;

  constructor(private preguntas: PreguntasService, private auth: AuthService) {
    this.preguntas.obtenerPreguntas().subscribe(resp=>{
      this.preguntasf = resp
    })
    this.auth.currentUser().subscribe(resp =>{
      this.user = resp
    })
   }

  ngOnInit(): void {
  }

}
