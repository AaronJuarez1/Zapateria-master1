import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import { AuthService } from "src/app/auth/auth.service";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private conectado:boolean = false;
  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
  }

}
