import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

interface UserRequest {
    nome: string
    email: string
    senha: string
}

class CreateUserService {
    async execute({nome, email, senha}:UserRequest) {
        if (!email) {
            throw new Error("Email não enviado");
        }

        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                email:email
            }
        })

        if(UserAlreadyExists){
            throw new Error("Email já utilizado");
            
        }

        const senhaHash = await hash(senha,8);

        const user = await prismaClient.usuario.create({
            data:{
                name: nome,
                email: email,
                senha: senhaHash
            },
            select: {
                id:true,
                name:true,
                email:true,

            }
        })
        return user;
    }
}
export { CreateUserService }