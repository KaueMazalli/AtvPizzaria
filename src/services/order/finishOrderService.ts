import prismaClient from "../../prisma";

interface OrderRequest{
    orderId: string;
}

export default class FinishOrderService{
    async execute({orderId}:OrderRequest){
        console.log(new Date().getDate());
        
        const erro = 'Pedido não enviado';
        let order = await prismaClient.pedido.findFirst({
            where:{
                id:orderId
            }
        })
        if (order.rascunho) {
            throw new Error(erro);
        };

        order = await prismaClient.pedido.update({
            where:{
                id:orderId
            },
            data:{
                status:true,
                modificadoEm: new Date(),
            }
        });

        let item = await prismaClient.item.findMany({
            where:{
                idPedido: orderId,
            }, 
            include:{
                produto: true,
            }
        });

        let total:number = 0;
        item.forEach(e => {
            let preco = parseFloat(e.produto.preco);
            let quant = (e.quantidade);
            total += (quant * preco);
        });
        console.log(total);
        
        return ({order, total});
    }
}