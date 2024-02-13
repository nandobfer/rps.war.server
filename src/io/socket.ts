import { Socket } from "socket.io"
// import zap from "./zap"
import { Server as SocketIoServer } from "socket.io"
import { Server as HttpServer } from "http"
import { Server as HttpsServer } from "https"
import game from "./game"
import { War } from "../class/War.js"
import { WarOptions } from "../types/WarOptions"

let io: SocketIoServer | null = null

export const initializeIoServer = (server: HttpServer | HttpsServer) => {
    io = new SocketIoServer(server, {
        cors: { origin: "*" },
        maxHttpBufferSize: 1e8,
    })
}

export const getIoInstance = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized. Please call initializeIoServer first.")
    }
    return io
}
const war_options: WarOptions = {
    quadrant_size: 500,
    units: 10,
}
const war = new War(war_options)

export const handleSocket = (socket: Socket) => {
    war.start()

    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
