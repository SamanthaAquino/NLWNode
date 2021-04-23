import { SettingsController } from './src/controllers/SettingsController';
import { Router } from "express";

// Arquivo com as rotas HTTP
// Requisições (GET / POST / PUT / DELETE / PATCH)  

export const routes = Router();

const settingsController = new SettingsController();

//GET
routes.get("/", (request, response) => {
    return response.json({
        message: "Ola"
    })
})

//POST
//Dando um create dentro da banco de dados
routes.post("/settings", settingsController.create)







/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => em formato de json {
 * }
 */
