import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productoForm: FormGroup
  pUpload!: Observable<number|undefined> 
  urlImage!: Observable<string>
  constructor(private fb:FormBuilder, private storage:AngularFireStorage) {
    this.productoForm = fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      img:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

}
