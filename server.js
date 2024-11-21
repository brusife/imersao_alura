import express from "express";

const posts = [ //criação de array para objetos -- MOCK
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante!",
        imagem: "https://source.unsplash.com/random/300x150/?nature"
    },
    {
        id: 3,
        descricao: "Meu novo pet!",
        imagem: "https://source.unsplash.com/random/300x150/?dog"
    },
    {
        id: 4,
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://source.unsplash.com/random/300x150/?food"
    },
    {
        id: 5,
        descricao: "Viagem incrível para a praia!",
        imagem: "https://source.unsplash.com/random/300x150/?beach"
    },
    {
        id: 6,
        descricao: "Um dia produtivo no trabalho!",
        imagem: "https://source.unsplash.com/random/300x150/?work"
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) =>{
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});