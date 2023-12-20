import { Pessoa } from "../model/Pessoa";

/**
 * Lista de pessoas que são armazenadas durante a execução do programa
 */
let bancoDadosPessoa: Pessoa[] = [];

/**
 * Cadastra uma pessoa na lista, simulando um banco de dados.
 * Os dados são armazenados somente durante o tempo de execução.
 * 
 * @param pessoa - Pessoa a ser inserida na lista
 * @returns Em caso de erro, é retornado os detalhes do erro a quem chamou esta função
 */
export function persistirPessoa(pessoa: Pessoa) {
    // Persistindo os dados
    try {
        bancoDadosPessoa.push(pessoa);
    } catch (error) {
        return `Erro ao persistir os dados\n ${error}`;
    }
}

/**
 * Lista todas as pessoas cadastradas.
 * @returns Lista de pessoas cadastradas
 */
export function listarPessoas() {
    return bancoDadosPessoa;
}

/**
 * Método para inicializar o array com 5 pessoas.
 * Apenas para a aplicação não ter um array vazio.
 */
export function inicializarPessoas() {
    bancoDadosPessoa.push(
        new Pessoa('José Bryan Yuri Fogaça','10477613195',new Date(1998, 8, 29),'53984291927','Rua Capitão Felino Alves',174,102),
        new Pessoa('Maria Silva','12345678901',new Date(1985, 5, 15),'98765432100','Rua Exemplo',42,205),
        new Pessoa('Carlos Oliveira','98765432109',new Date(1990, 2, 10),'12345678901','Avenida Principal',78,304),
        new Pessoa('Ana Souza','87654321098',new Date(1973, 11, 5),'45678901234','Travessa da Paz',123,401),
        new Pessoa('Lucas Santos','65432109876',new Date(2000, 7, 20),'78901234567','Rua do Saber',56,503)
    );
}