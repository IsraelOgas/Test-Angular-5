import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  dataUser:any;
  dataUserSubscriptions: any;
  user: string = '';
  found = false;
  foundS = false;
  notFound: string = 'No se encontró el usuario que quiere buscar';

  constructor(private http: HttpClient){

  }

  onNameKeyUp(event:any){
    this.user = event.target.value;
  }

  getData() {
    this.http.get<any>(`https://api.github.com/users/${this.user}`).subscribe( 
      data => {
        console.log(data.html_url);
        this.dataUser = data;
        this.found = true;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error en el Cliente');
        } else {
          console.log('Ocurrio un Error');
          this.found = false;
        }
      }
    );
  }

  getDataSubscriptions() {
    this.http.get<any>(`https://api.github.com/users/${this.user}/subscriptions`).subscribe( 
      data => {
        this.dataUserSubscriptions = data;
        this.foundS = true;
        console.log(this.dataUserSubscriptions);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error en el Cliente');
        } else {
          console.log('Ocurrio un Error');
          this.found = false;
        }
      }
    );
  }

  clear() {
    this.dataUser = null;
    this.found = false;
    this.dataUserSubscriptions = null;
  }

  getURLRepo() {
    this.dataUser.html_url;
  }

  ngOnInit(): void {
    console.log('Sapea OwO');
  }

}
