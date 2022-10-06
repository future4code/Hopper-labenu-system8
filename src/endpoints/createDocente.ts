import { Request, Response } from "express"
import connection from "../database/connection"
import { docente } from "../models/docente"
import { TABLE_DOCENTES, TABLE_TURMA, TABLE_USUARIOS, TABLE_ESPECIALIDADE } from "../database/tableNames"
import { usuarios } from "../models/usuarios"


export const createDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        const turma = req.body.turma
        const especialidade = req.body.especialidade

        if (!email || !nome || !data_nasc || !turma || !especialidade) {
            throw new Error("Body inválido.")
        }

        const newDocente = new docente(
            turma,
            especialidade
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
        if (especialidade){
            await connection(TABLE_ESPECIALIDADE).select() } else{
                throw new Error("Especialidade não encontrada");
                
            } 

        await connection(TABLE_DOCENTES).insert(newDocente)
        await connection(TABLE_USUARIOS).insert(newUsuarios)
        
        //falta unir o resultado das duas tabelas para exibir ao usuário
        res.status(201).send({ message: "Usuário criado"})
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}