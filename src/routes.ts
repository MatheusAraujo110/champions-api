import { Router } from "express";
import * as PlayerController from "./controller/players-controller";
import * as ClubsController from "./controller/clubs-controller"

const router = Router()

// rotes players
router.get("/players", PlayerController.getPlayer)
router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayer)
router.patch("/players/:id", PlayerController.updatePlayer)
router.get("/players/:id", PlayerController.getPlayerById)

router.get("/clubs", ClubsController.getClubs)


export default router