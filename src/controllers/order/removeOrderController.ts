import {Request, Response} from 'express';
import RemoveOrderService from '../../services/order/removeOrderService';

export default class RemoveOrderController{
    async handle(req: Request, res:Response){
    const idPedido = req.query.idPedido as string;
    const removeOrderService = new RemoveOrderService();
    const order = removeOrderService.execute({idPedido});
    return res.json(order);
    }
}