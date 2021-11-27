import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
