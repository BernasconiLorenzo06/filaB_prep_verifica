import { Component, Input } from '@angular/core';
import { vegetableList } from '../vegetables.model';
@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent {
  @Input() verdura !: vegetableList;
}
