import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any = []
  grantTotal: number = 0
  discount: number = 0
  discountTotal:number = 0
 
  constructor(private cart: CartService, private router: Router) {

  }
  ngOnInit(): void {
    this.cart.cartItemList.subscribe(
      (data: any) => {
        this.cartItems = data
      }
      
    )
    let total = this.cart.grantTotal()
    this.grantTotal = Number(total.toFixed(2))
    this.discountTotal=this.grantTotal

  }
    //removeItem
    removeItem(product: any) {
      this.cart.removeCartItem(product)
      let total = this.cart.grantTotal()
      this.grantTotal = Number(total.toFixed(2))
      this.discountTotal = this.grantTotal

    }
    //emptyCart()
  emptyCart() {
    this.cart.removeCart()
  }
  //discount30percent()
  discount30percent() {
    this.discount = this.grantTotal * 0.3
    this.discountTotal = this.grantTotal - this.discount
  }
}
