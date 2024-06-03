import prismaClient from "../../prisma";

interface OrderRequest{
    idPedido: string;
}

export default class RemoveOrderService{
    async execute({idPedido}:OrderRequest){
        const order = await prismaClient.pedido.delete({
            where: {
                id:idPedido
            }
        })
        return {order};
    }
}