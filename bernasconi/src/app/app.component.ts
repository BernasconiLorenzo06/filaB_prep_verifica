import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vegetableList } from './vegetables.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaVerdure !: vegetableList[];
  obserVerdure !: Observable<vegetableList[]>;
  constructor(public http: HttpClient) {} //serve a inizializzare proprieta classe


  ngOnInit(): void { //oninit serve per eseguire le istruzioni all'avvio
    this.richiesta()
  }
  //il get che prende i dati dal server che in questo caso è il link
  richiesta(): void {
    this.obserVerdure = this.http.get<vegetableList[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure')
    this.obserVerdure.subscribe(this.getData)
  }
  //funzione che inizializza get data
  getData = (d:vegetableList[]) => {
    this.listaVerdure = d;
  }
}
