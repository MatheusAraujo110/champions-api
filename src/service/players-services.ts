import * as PlayerRepository from './../repositories/players-repository';
import * as HttpResponse from "../utils/hhtp-helper"


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