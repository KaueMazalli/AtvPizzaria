import prismaClient from "../../prisma";

export default class ListOrderService{
    async execute(){
        const order = await prismaClient.pedido.findMany({
            select:{
                id: true,
                name: true,
                mesa: true,
                rascunho: true,
                status: true,
                criadoEm: true,
                modificadoEm: true

            }
        })
        return order
    }
}