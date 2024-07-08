import { Order } from "./order";
import { Order2 } from "./order2";

export class OrderItem2 {
    id:number;
    imageUrl:string;
    unitPrice: number;
    quantity: number;
    productId: number;
    constructor(orders: Order2) {
        this.imageUrl = orders.imageUrl;
        this.quantity = orders.quantity;
        this.unitPrice = orders.unitPrice;
        this.productId = orders.id;
    }
}
