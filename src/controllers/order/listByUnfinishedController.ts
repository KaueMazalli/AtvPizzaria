import { Request, Response } from "express";
import ListByUnfinishedService from "../../services/order/listByUnfinishedService";

export default class ListByUnfinishedController {
    async handle(req: Request, res:Response){
    let date = new Date(req.body.date);       
    const listByUnfinishedController = new ListByUnfinishedService();
    const list = await listByUnfinishedController.execute({date});       
    return res.json({list});
    }
}