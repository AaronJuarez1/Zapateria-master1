import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AuthService } from "src/app/auth/auth.service";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    user: any;

  constructor(private auth: AuthService) {
    this.auth.currentUser().subscribe(resp =>{
      this.user = resp
    })
  }

  ngOnInit(): void {

  }
  logOut(){
    this.auth.LogOut()
  }
}
