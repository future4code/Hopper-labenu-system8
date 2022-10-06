export class usuarios {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public data_nasc: string,
               
    ) {
        this.id = id
        this.nome = nome
        this.email = email
        this. data_nasc = data_nasc
    }
}