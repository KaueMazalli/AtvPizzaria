import prismaClient from "../../prisma";

interface OrderRequest{
    name: string
    mesa: number
}

export default class CreateOrderService{
    async execute({name,mesa}:OrderRequest){
        const order = await prismaClient.pedido.create({
            data:{
                name:name,
                mesa:mesa
            }
        })
        return order;
    }
}