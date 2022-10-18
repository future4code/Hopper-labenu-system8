import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TURMA, TABLE_USUARIOS, TABLE_HOBBY, TABLE_ESTUDANTES } from '../database/tableNames';
import { usuarios } from "../models/usuarios"
import { estudante } from "../models/estudante"


export const createEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        const turma = req.body.turma
        const hobby = req.body.hobby

        if (!email || !nome || !data_nasc || !turma || !hobby) {
            throw new Error("Body inválido.")
        }

        const newEstudante = new estudante(
            turma,
            hobby
        )
        const newUsuarios = new usuarios(
            Date.now(),
            nome,
            email,
            data_nasc,
        )
        if (turma){
        await connection(TABLE_TURMA).select() } else{
            throw new Error("Turma não encontrada");
            
        }  
        if (hobby){
            await connection(TABLE_HOBBY).select() } else{
                throw new Error("Hobby não encontrado");
                
            } 

        await connection(TABLE_ESTUDANTES).insert(newEstudante)
        await connection(TABLE_USUARIOS).insert(newUsuarios)
        
        //falta unir o resultado das duas tabelas para exibir ao usuário
        res.status(201).send({ message: "Usuário criado"})
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}