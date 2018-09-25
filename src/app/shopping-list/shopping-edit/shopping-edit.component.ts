import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingName') ingNameRef: ElementRef;
  @ViewChild('ingAmt') ingAmtRef: ElementRef;
  //@Output() ingAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
  }
  onIngAdd(){
    const ingName = this.ingNameRef.nativeElement.value;
    const ingAmt = this.ingAmtRef.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmt);
    this.slService.OnIngAdded(ingredient);
    //this.ingAdded.emit(ingredient);
  }

}
