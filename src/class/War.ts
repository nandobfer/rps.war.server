import { Server } from "socket.io"
import { WarOptions } from "../types/WarOptions"
import { Team } from "./Team"

export class War {
    teams: Team[] = []
    loop: NodeJS.Timer | null = null
    io: Server | null

    quadrant_size: number
    units: number

    constructor(data: WarOptions) {
        this.io = data.io
        this.quadrant_size = data.quadrant_size
        this.units = data.units
        
    }

    start() {
        if (this.loop) return

        this.teams.push(new Team({ image: "/static/rock.webp", sector_x: 1, sector_y: 1, quadrant_size: this.quadrant_size, units: this.units }))
        this.teams.push(new Team({ image: "/static/paper.webp", sector_x: 2, sector_y: 1, quadrant_size: this.quadrant_size, units: this.units }))
        this.teams.push(new Team({ image: "/static/scissors.webp", sector_x: 1, sector_y: 2, quadrant_size: this.quadrant_size, units: this.units }))

        this.loop = setInterval(() => {
            this.teams.forEach((team) => {
                team.units.forEach((unit) => unit.move())
            })
            this.sync()
        }, 100)
    }

    stop() {
        this.loop = null
        this.teams = []
    }

    sync() {
        this.io?.emit("war:sync", this.teams)
    }
}
