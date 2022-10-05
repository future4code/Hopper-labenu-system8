export class turma{
    constructor(
        public id: number,
        public docentes: number,
        public estudantes: number,
        public modulo: number
        ){
            this.id = id
            this.docentes = docentes
            this.estudantes = estudantes
            this.modulo = modulo
        }
    
}