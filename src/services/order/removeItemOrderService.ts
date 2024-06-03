import prismaClient from "../../prisma";

interface ItemRequest{
    pedidoId: string

}

export default class RemoveItemService{
    async execute({pedidoId}:ItemRequest){
        const pedido = await prismaClient.item.delete({
            where:{
                id: pedidoId
            }
        })
    return pedido
    }
}