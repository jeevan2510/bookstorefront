import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishlist: any;
  wishlistStatusMsg = ''
  constructor(private api: ApiService, private cart: CartService) { }
  ngOnInit(): void {
    this.api.getWishlist()
      .subscribe(
        (result: any) => {
          this.wishlist = result.wishlist
          if (this.wishlist.length == 0) {
            this.wishlistStatusMsg = 'Favorites empty'
          }
        }, (result: any) => {
          if (result.error.message) {
            this.wishlistStatusMsg = 'Favorites empty'

          }
        }
      )


  }
  removeItem(productId: any) {
    this.api.removeItemFromWishlist(productId)
      .subscribe(
        //200
        (result: any) => {
          this.wishlist = result.wishlist
          console.log(this.wishlist);
          if (this.wishlist.length == 0) {
            this.wishlistStatusMsg = 'wishlist empty'
          }
        },
        //400
        (result: any) => {
          alert(result.error.message)
        }
      )
  }
  //addToCart
  addToCart(product: any) {
    this.cart.addToCart(product)
    this.removeItem(product.id)
  }
}


