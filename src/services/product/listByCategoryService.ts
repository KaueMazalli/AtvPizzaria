import prismaClient from "../../prisma";

interface listRequest {
    idCategoria: string;
}

export default class listByCategoryService{
    async execute({idCategoria}:listRequest){
        const product = await prismaClient.produto.findMany({
            where:{
            idCategoria: idCategoria
            }
        })
        return product;
    }
}