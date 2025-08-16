import { PlayerModel } from "../models/player-model"
import { createPlayerService } from "../service/players-services"

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Messi",
        club: "Paris Saint-Germaiin",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbring: 95,
            Defending: 38,
            Physical: 65,
        }
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester Unted",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 89,
            Shooting: 93,
            Passing: 82,
            Dribbring: 88,
            Defending: 35,
            Physical: 78,
        }
    },
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}