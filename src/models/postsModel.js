import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts de uma coleção específica no banco de dados
export async function getTodosPosts() {
    // Obtém o banco de dados 'brusife' da conexão
    const db = conexao.db("brusife");
    // Obtém a coleção 'posts' do banco de dados
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

export async function criarPost (novoPost) {
    const db = conexao.db("brusife");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}