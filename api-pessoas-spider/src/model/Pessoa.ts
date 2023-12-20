import { persistirPessoa } from "../controller/bancoDeDados";

export class Pessoa {

    // atributos da classe
    private nome: string;
    private cpf: string;
    private data_nascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    //método construtor
    public constructor (_nome: string, _cpf: string, _data_nascimento: Date, _telefone: string, _endereco: string, _altura: number, _peso: number) {
            this.nome = _nome;
            this.cpf = _cpf;
            this.data_nascimento = _data_nascimento;
            this.telefone = _telefone;
            this.endereco = _endereco;
            this.altura = _altura;
            this.peso = _peso;
    }

    // métodos GETTERS and SETTERS
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getDataNascimento(): Date {
        return this.data_nascimento;
    }

    public setDataNascimento(data_nascimento: Date): void {
        this.data_nascimento = data_nascimento;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public getAltura(): number {
        return this.altura;
    }

    public setAltura(altura: number): void {
        this.altura = altura;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }
    
    // Métodos da classe
    public mostraPessoa() {
        console.log(`Nome: ${this.nome}
        CPF: ${this.cpf}
        Data de nascimento: ${this.data_nascimento.getUTCDate()}/${this.data_nascimento.getMonth()}/${this.data_nascimento.getFullYear()}
        Telefone: ${this.telefone}
        Endereço: ${this.endereco}
        Altura: ${this.altura}
        Peso: ${this.peso}`);
    }

    // implementar os métodos
    public falar():void {
        // lógica de negócio
        console.log(`${this.nome} está falando...`);
    }

    public falarFrase(_frase: string):void {
        //lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }

    public andar():void {
        console.log(`${this.nome} está andando...`);
    }

    public andarQuilometros(quilometros: number):void {
        setTimeout(() => {
            console.log(`${this.nome} caminhou ${quilometros} quilometros`);
        }, 3000);
    }

    public comer(): void {
        console.log(`${this.nome} está comendo...`);
    }

    public comerPrato(prato: string):void {
        console.log(`${this.nome} está comendo ${prato}`);
    }
}