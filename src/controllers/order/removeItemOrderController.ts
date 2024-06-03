import { Request, Response } from "express";
import RemoveItemService from "../../services/order/removeItemOrderService";

export default class RemoveItemOrderController{
    async handle(req: Request, res:Response){
    const pedidoId = req.query.pedidoId as string;
    const removeItemService = new RemoveItemService();
    const pedido = await removeItemService.execute({pedidoId});
    return res.json(pedido)

    }
}