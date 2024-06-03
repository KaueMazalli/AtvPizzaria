import { Request, Response } from "express";
import ListOrderService from "../../services/order/listOrderService";

export default class ListOrderController {
    async handle(req: Request, res:Response){
    const listOrderController = new ListOrderService();
    const order = await listOrderController.execute();
    return res.json({order});
    }
}