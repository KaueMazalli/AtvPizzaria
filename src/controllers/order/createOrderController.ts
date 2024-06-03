import { Request, Response } from "express";
import CreateOrderService from "../../services/order/createOrderService";


export default class CreateOrderController{
    async handle(req: Request, res:Response){
    const {mesa, name} = req.body;
    const createOrderService = new CreateOrderService();
    const order = await createOrderService.execute({mesa, name});
    return res.json({order});
    }
}