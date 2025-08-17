import { Request, Response } from "express"
import * as Service from "../service/players-service"
import { StatisticsModel } from "../models/statistics-model"

export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await Service.getPlayerService()
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)  // convertendo para number
    const httpResponse = await Service.getPlayerByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await Service.createPlayerService(bodyValue)

    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await Service.deletePLayerService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue: StatisticsModel = req.body
    const httpResponse = await Service.updatePlayerService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}