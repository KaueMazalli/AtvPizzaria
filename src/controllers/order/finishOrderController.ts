import { Request, Response } from "express";
import FinishOrderService from "../../services/order/finishOrderService";

export default class FinishOrderController{
    async handle(req: Request, res:Response){
    const {orderId} = req.body;
    const finishOrderService = new FinishOrderService();
    const {order, total} = await finishOrderService.execute({orderId});
      console.log(order);
    return res.json({order, total});
    }
}