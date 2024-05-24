import { Component, Input } from '@angular/core';
import { cart_product } from '../cart_product.model';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent {
@Input()verdureSelezionate:cart_product[] | undefined
}
