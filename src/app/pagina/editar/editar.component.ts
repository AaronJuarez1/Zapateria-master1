import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  
  enviarProductos(id:string){
    this.router.navigate(['editar',id])
  }
}
