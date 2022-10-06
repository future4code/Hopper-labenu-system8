export class turma{
    constructor(
        public id: number,
        public nome: string,
        public docentes: number,
        public estudantes: number,
        public modulo: MODULO
        ){
            this.id = id
            this.nome = nome,
            this.docentes = docentes
            this.estudantes = estudantes
            this.modulo = modulo
        }
    
}

export enum MODULO{
    NÃO_INICIADA = "0",
    BLOCO1 = "1",
    BLOCO2 = "2",
    BLOCO3 = "3",
    BLOCO4 = "4",
    BLOCO5 = "5",
    BLOCO6 = "6"
}