import prismaClient from "../../prisma";

class listCategoryService{
    async execute(){
        const category = await prismaClient.categoria.findMany({
            select:{
                id: true,
                name: true
            }
        })
        return category
    }
}

export {listCategoryService}