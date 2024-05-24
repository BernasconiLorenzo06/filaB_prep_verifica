import { Component , Input } from '@angular/core';
import { vegetableList } from '../vegetables.model';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input()verduraSelezionata!: vegetableList;
}
