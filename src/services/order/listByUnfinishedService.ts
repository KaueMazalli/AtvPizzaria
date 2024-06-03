import prismaClient from "../../prisma";

interface DateRequest{
    date: Date
}

export default class ListByUnfinishedService{
    async execute({date}:DateRequest){
        let data = new Date(date);

        data.setDate(data.getDate() + 1)
        const list = await prismaClient.pedido.findMany({
            where:{
                status: false,
                modificadoEm: {
                    gte: date,
                    lte: data,
                }
            },
            select:{
                id: true,
                name: true,
                mesa: true,
                rascunho: true,
                status: true,
                modificadoEm: true
            }
        })
        return list
    }
}