import * as findAllPlayers from './../repositories/players-repository';
import { noContent, ok } from "../utils/hhtp-helper"


export const getPlayerService = async () => {
    const data = await findAllPlayers.findAllPlayers()
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response
}