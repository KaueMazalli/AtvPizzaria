import { Request, Response } from "express";
import AddItemService from "../../services/order/addItemService";

export default class AddItemController{
    async handle(req:Request, res:Response){
    const {quantidade, idPedido, idProduto} = req.body;
    const addItemService = new AddItemService();
    const item = await addItemService.execute({
     quantidade,
     idPedido,
    idProduto
     })
        return res.json(item);
    }
}