import { noContent, ok } from "../utils/hhtp-helper"


export const getPlayerService = async () => {
    const data = { player: "Matheus" }
    let response = null

    if (data) {
        response = await ok(data)
    } else {
        response = await noContent()
    }

    return response
}