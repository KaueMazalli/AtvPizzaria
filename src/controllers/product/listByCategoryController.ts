import { Request, Response } from "express";
import listByCategoryService from "../../services/product/listByCategoryService";

export default class listByCategoryController{
    async handle(req:Request, res:Response){
     const idCategoria = req.query.idCategoria as string;
     const listByCategoryController = new listByCategoryService();
    const list = await listByCategoryController.execute({idCategoria});
    return res.json(list);
    }
}