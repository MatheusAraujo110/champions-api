import { Request, Response } from "express"
import * as Service from "../service/players-services"


export const getPlayer = async (req: Request, res: Response) => {
    const HttpResponse = await Service.getPlayerService()
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)  // convertendo para number
    const HttpResponse = await Service.getPlayerByIdService(id)
    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}