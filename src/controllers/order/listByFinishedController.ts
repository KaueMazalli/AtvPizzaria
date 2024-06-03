import { Request, Response } from "express";
import ListByFinishedService from "../../services/order/listByFinishedService";

export default class ListByFinishedController {
    async handle(req: Request, res:Response){
    let date = new Date(req.body.date);                
    const listByFinishedController = new ListByFinishedService();
    const list = await listByFinishedController.execute({date});        
    return res.json({list});
    }
}