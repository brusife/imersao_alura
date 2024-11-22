import express from "express";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controlers/postsController.js";
import multer from "multer";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest:"./uploads", storage})

const routes = (app) => {
    app.use(express.json()); // Habilita o parser JSON para lidar com requisições com corpo JSON
    app.use(cors(corsOptions))

    // Rota GET para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost)
};

export default routes;