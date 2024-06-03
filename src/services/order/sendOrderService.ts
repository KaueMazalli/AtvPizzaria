import prismaClient from "../../prisma";

interface OrderRequest{
    orderId: string;
}

export default class SendOrderService{
    async execute({orderId}:OrderRequest){
        const order = await prismaClient.pedido.update({
            where:{
                id:orderId
            },
            data:{
                rascunho: false,
                modificadoEm: new Date()
            }
        })
        return order;
    }
}