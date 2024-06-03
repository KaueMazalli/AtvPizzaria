import { Request, Response } from "express";
import { listCategoryService } from "../../services/category/listCategoryService";

class listCategoryController {
    async handle(req: Request, res:Response){
    const listCategoryController = new listCategoryService();
    const category = await listCategoryController.execute();
    return res.json({category});
    }
}

export {listCategoryController}