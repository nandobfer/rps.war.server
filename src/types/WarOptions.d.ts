import { Server } from "socket.io"

export declare interface WarOptions {
    units: number
    quadrant_size: number
    io: Server | null
}
