import { Request, Response } from "express"
import { CreateProductService } from "../../services/product/createProductService"

class CreateProductController{
    async handle(req: Request, res: Response){
        const {nome, preco, descricao, idCategoria } = req.body;
        const createProductService = new CreateProductService();
        if (!req.file) {
            throw new Error("Erro no upload de imagem")
        } else {
            const {originalname, filename: banner} = req.file;

            const product = await createProductService.execute({
                nome,
                preco,
                descricao,
                banner,
                idCategoria
            })

            return res.json(product);
        }
    }
}

export {CreateProductController}