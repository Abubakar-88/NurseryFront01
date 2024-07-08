import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  isSignedin: boolean = false;
  signedinUser: string = '';
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  productToUpdate: any;
  //unitsInStock: number=0;
  isDisabled: boolean = false;
  product: Product = new Product();


  constructor(private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.listCartDetails();
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
    if (!this.authService.isUserSignedin()) {
      this.router.navigateByUrl('signin');
    }


  }
  listCartDetails() {

    // get  ahandle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    //subscribe to the cart totalQuanntity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
    // this.router.navigateByUrl('signin');
  }

  incrementQuantity(theCartItem: CartItem) {
            this.cartService.addToCart(theCartItem);
    
  }
  
  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
