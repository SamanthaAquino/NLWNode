import { SettingsRepository } from './../repositories/SettingsRepository';
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";


export class SettingsController {

    async create(request: Request, response: Response) {
        // Desestruturação
        const { chat, username } = request.body;

        // Instancia o repository
        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = settingsRepository.create({
            chat,
            username
        })

        // Salva os dados e retorna no formato json
        await settingsRepository.save(settings)
        return response.json(settings)
    }
}