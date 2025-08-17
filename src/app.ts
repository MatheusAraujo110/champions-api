import express from "express"
import cors from "cors"
import router from "./routes"

function createApp() {
    const app = express()

    app.use(express.json())
    app.use("/api", router)

    // const corsOptions = {
    //     origin: ['http://matheus.system.com', 'www.gov.br'],  // Ex: mais de uma autorização e add a URL. delemita quem pode usar a minha API
    //     methods: ['GET', 'UPDATE']
    // }
    app.use(cors()) // dentro de cors(), só pode ser chamado que for www.matheus...

    return app
}

export default createApp