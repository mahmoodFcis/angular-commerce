import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-speical-offers',
  templateUrl: './speical-offers.component.html',
  styleUrls: ['./speical-offers.component.css']
})
export class SpeicalOffersComponent implements OnInit {

  title:string="Special Offers Title";
  txtProperty:string="Offer!";
  txtWidth=200;
  isClassActive=false;
  showProducts=true;
  products:any[]=[{name:"Oil", unitPrice:10,itemPrice:20,weight:1},
  {name:"Oil 2", unitPrice:3,itemPrice:40,weight:1},
  {name:"Oil 3", unitPrice:4,itemPrice:50,weight:12}
];

@Output() addToCart:EventEmitter<any>=new EventEmitter<any>();
  txtMouseOver(txtInput){
    console.log(txtInput);
    txtInput.value="mahmoud Shaaban";
  }
  AddCart(product)
  {
    this.addToCart.emit(product)
  }
  constructor() { }
  
  ngOnInit() {
  }

}
