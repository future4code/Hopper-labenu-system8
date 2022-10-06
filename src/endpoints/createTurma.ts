import { estudante } from '../models/estudante';
import { Request, Response } from "express"
import connection from "../database/connection"
import { turma } from '../models/turma';
import { TABLE_DOCENTES, TABLE_ESTUDANTES, TABLE_TURMA } from '../database/tableNames';

export const createTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.body.nome
        const docentes = req.body.docentes
        const estudantes = req.body.estudante
        const modulo = req.body.modulo
        

        if (!docentes || !nome || !estudantes || !modulo) {
            throw new Error("Body inválido.")
        }

            const newTurma = new turma(
            Date.now(),
            nome,
            docentes,
            estudantes,
            modulo
        )
        if (docentes){
        await connection(TABLE_DOCENTES).select() } else{
            throw new Error("Docente não encontrado");
            
        }  
        if (estudante){
            await connection(TABLE_ESTUDANTES).select() } else{
                throw new Error("Estudante não encontrado");
                
            } 

        await connection(TABLE_TURMA).insert(newTurma)
      
        
        //falta testar a exibição do resultado ao usuário
        res.status(201).send({ message: "Turma criado"})
    } catch (error:any) {
        res.status(errorCode).send({ message: error.message })
    }
}