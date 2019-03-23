import {Component} from '@angular/core';

@Component({
    selector:"product",
    template:"<div>{{productTitle}}</div>"
})
export class ProductComponent {
 
    constructor(){
        this.productTitle="El maraai";
    }
    productTitle:string="";
    category:string="Milk";
}
