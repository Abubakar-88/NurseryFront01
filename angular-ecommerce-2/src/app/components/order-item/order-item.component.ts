import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { OrderItem2 } from 'src/app/common/order-item2';
import { Order2 } from 'src/app/common/order2';
//import { OrderItem } from 'src/app/common/order-item';
import { OrderItemService } from 'src/app/services/order-item.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  isSignedin: boolean = false;
  signedinUser: string;
  orderItem: OrderItem2[]=[];
  storage: Storage = sessionStorage;
  orders: Order2[];

  constructor( private orderItemService: OrderItemService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.handleOrderItem();
    this.isSignedin = this.authService.isUserSignedin();
    this.signedinUser = this.authService.getSignedinUser();
  }

    handleOrderItem():void{
      //const  id  = Number(this.orderHistory.getOrderHistory);
   const id = Number(this.route.snapshot.paramMap.get('id'));

       // retrieve data from the service
    this.orderItemService.getOrderItemList(id).subscribe(
      (response: OrderItem2[]) => {

        this.orderItem = response;
        console.log("order item: "+JSON.stringify(response));
        console.log('Error:', response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );

    }


}
