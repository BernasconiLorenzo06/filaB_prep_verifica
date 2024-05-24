import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vegetableList } from './vegetables.model';
import { Observable } from 'rxjs';
import { cart_product } from './cart_product.model'; // importo la classe
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaVerdure !: vegetableList[];
  obserVerdure !: Observable<vegetableList[]>;
  selezionato: boolean = false; //serve per evitare il problema che lui non trovi l'auto selezionata
  verduraSelezionata !: vegetableList;
  verdureSelezionate : cart_product[] = []; //creo il vettore
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

  aggiungi(verdura: vegetableList): boolean {
    console.log(verdura.nome)
    console.log(verdura.descrizione)
    console.log(verdura.prezzo)
    this.selezionato = true; //visualizza componente
    this.verduraSelezionata = verdura; //seleziona il mezzo
    return false
  }

}
