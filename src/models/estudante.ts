
export class estudante{
    constructor(
        public id:number,
        public nome: string,
        public email: string,
        public data_nasc: string,
        public turma_id:number,
        public hobbies: string
    ) {
        this.id=id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
        this.hobbies = hobbies
    }
}
