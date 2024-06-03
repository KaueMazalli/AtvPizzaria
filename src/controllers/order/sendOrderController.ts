import { Request, Response } from "express";
import SendOrderService from "../../services/order/sendOrderService";

export default class sendOrderController{
    async handle(req: Request, res:Response){
    const {orderId} = req.body;
    const sendOrderService = new SendOrderService();
    const order = await sendOrderService.execute({orderId});
    return res.json(order);
    }
}