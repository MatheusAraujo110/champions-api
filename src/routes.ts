import { Router } from "express";
import { getPlayer } from "./controller/players-controller";

const router = Router()

router.get("/api", getPlayer)

export default router