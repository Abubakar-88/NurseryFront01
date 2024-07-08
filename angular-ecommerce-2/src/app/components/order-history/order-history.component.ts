import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CartItem } from 'src/app/common/cart-item';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';


@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  

  isSignedin: boolean = false;
  signedinUser: string;
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;
  isDisplayOrderItem: boolean = false;
  customers: any;
  cartItem: CartItem[]=[];
  orders: any;
  orderItems: any[] = [];
  constructor(private orderHistoryService: OrderHistoryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
  }
  handleOrderHistory() {
    // read the user's email address from browser storage
    const  {email}  = this.authService.userDetails;

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(email).subscribe(
      data => {
        0
        this.orderHistoryList = data._embedded.orders;
        console.log("order: " + this.orderHistoryList);
      }
    );
  }
  customersid(customersid: any) {
    throw new Error('Method not implemented.');
  }


  goToOrderItemList(orderItemDetails: any) {
    this.isDisplayOrderItem = true
    this.orderItems = orderItemDetails.orderItems;
          console.log("orderItem: "+ this.orderItems);
  }
 
	




}
