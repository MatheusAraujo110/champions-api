import * as PlayerRepository from './../repositories/players-repository';
import * as HttpResponse from "../utils/hhtp-helper"
import { PlayerModel } from '../models/player-model';


export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    // pedir para o repositório
    const data = await PlayerRepository.findPlayerById(id)
    let response = null

    if (data) {
        response = await HttpResponse.ok(data)
    } else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    let response = null

    // verifica se está vazio 
    if (Object.keys(player).length !== 0) {
        response = await PlayerRepository.insertPlayer(player)
        response = HttpResponse.created()
    } else {
        response = HttpResponse.badRequest()
    }
    return response
}

export const deletePLayerService = async (id: number) => {
    let response = null
    await PlayerRepository.deleteOnePlayer(id)

    response = HttpResponse.ok({ message: "deleted" })
    return response
}