import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Preguntas } from 'src/app/interfaces/preguntas';


@Component({
  selector: 'app-editpre',
  templateUrl: './editpre.component.html',
  styleUrls: ['./editpre.component.css']
})
export class EditpreComponent implements OnInit {

  preguntaForm: FormGroup
  id!: any;

  constructor(private router: Router, private fb: FormBuilder, private preguntas: PreguntasService,  private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.preguntaForm = this.fb.group({
      pregunta: ['', Validators.required],
      respuesta: ['', Validators.required],
    });
    // activa la ruta dentro del id
    this.aRoute.params.subscribe(resp =>{
      this.id = resp
    })

   }

  ngOnInit(): void {
    console.log (this.id.id)
    this.preguntas.obtenerPregunta(this.id.id).subscribe(resp =>{
      this.preguntaForm.patchValue({
        pregunta: resp.pregunta,
        respuesta: resp.respuesta
      })
    })
  }

  EditarPregunta(){
    const preguntasfrecuentes: Preguntas = {
      pregunta: this.preguntaForm.value.pregunta, 
      respuesta: this.preguntaForm.value.respuesta
    }
    this.preguntas.editarPregunta(this.id.id, preguntasfrecuentes)
    this.router.navigate(['preguntas'])
  }

}
