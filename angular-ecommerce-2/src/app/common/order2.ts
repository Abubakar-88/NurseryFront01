import { OrderItem2 } from "./order-item2";

export class Order2 {
    id:number;
    imageUrl: string;
    quantity: number;
    unitPrice: number;
    productId: number;

    constructor(orderItem: OrderItem2) {
        this.imageUrl = orderItem.imageUrl;
        this.quantity = orderItem.quantity;
        this.unitPrice = orderItem.unitPrice;
        this.productId = orderItem.id;
    }
}
