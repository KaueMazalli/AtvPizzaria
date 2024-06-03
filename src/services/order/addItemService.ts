import prismaClient from "../../prisma";

interface ItemRequest{
    quantidade: number,
    idProduto: string,
    idPedido: string
}

export default class AddItemService{
    async execute({quantidade, idProduto, idPedido}:ItemRequest){
        const item = await prismaClient.item.create({
            data:{
                quantidade:quantidade,
                idProduto:idProduto,
                idPedido:idPedido
            }
        })
        return item;
    }
}