import prismaClient from "../../prisma"

interface ProductRequest{
    nome: string,
    preco: string,
    descricao: string,
    banner: string,
    idCategoria: string
}

class CreateProductService{

    async execute({nome, preco, descricao, banner, idCategoria}:ProductRequest){
        const product = await prismaClient.produto.create({
            data:{
                name: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                idCategoria: idCategoria
            }
        })
        return product;
    }
}

export {CreateProductService}