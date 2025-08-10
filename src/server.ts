import express, { json, Request, Response } from "express"
import createApp from "./app"

const app = createApp()
const port = process.env.PORT

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        player: "Messi"
    })
})

app.listen(port, () => {
    console.log(`✅ Server running at port http://localhost:${port} `)
})