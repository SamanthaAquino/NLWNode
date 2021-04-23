// Gerar aquivo de configuração
// npm init -y  

// Caso apareca ... na importação, quer dizer que falta instalar as tipagens, ex:
// npm install @types/express -D
import 'reflect-metadata'
import express, { response } from "express";
import { routes } from "../routes";

//importa o index do database e  já cria a conexão
import "./database";


const app = express();

//----------------------------------------------------------------------------------------
// Primeiro teste com as chamadas de requisiçoes dentro deste arquivo
//----------------------------------------------------------------------------------------
/**
 * GET : Buscar
 * POST : Criar
 * PUT : Alterar
 * DELETE : Deletar
 * PATCH : Alterar uma informação específica
 */

// GET com send
// app.get("/", (request, response) => {
//     return response.send("Ola NLW 05")
// })

// GET com JSON
// app.get("/", (request, response) => {
//     return response.json({
//         message: "Ola NLW 05"
//     })
// })

// //Rota de post
// app.post("/", (request, response) => {
//     return response.json({ message: "Usuário salvo com sucesso" })
// })
//----------------------------------------------------------------------------------------

app.use(express.json());
app.use(routes)

// Servidor rodando na porta 3333
app.listen(3333, () => console.log("Server is running on port 3333"));

// Para executar um arquivo node:
// node src/server.ts

// Porem o node nao entende a sintaxe import
// Teria que ser const require
// Mas existem outras formas para usar o import

// Gerar arquivo de configuracao do typescript
// yarn tsc --init

// Ajudar o node a entender essas sintaxe
// npm i ts-node-dev -D

// Rodar aplicação
// npm run dev