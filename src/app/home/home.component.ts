import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';


@Component({
    selector:"app-home",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent
{
    productsCount=0;
    @Output() addToCart:EventEmitter<any>=new EventEmitter<any>();
   addCart(product:any){
       this.productsCount++;
//this.addToCart.emit(product);
   }
}