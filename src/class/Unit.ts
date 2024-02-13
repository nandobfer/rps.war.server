import { uid } from "uid"
import { UnitOptions } from "../types/UnitOptions"
import random from "random"

export class Unit {
    id: string
    x: number
    y: number
    image: string
    quadrant_size: number

    width = 30
    height = 30

    constructor(data: UnitOptions) {
        this.id = uid()
        this.quadrant_size = data.quadrant_size
        const { x, y } = this.generatePos(data.sector_x, data.sector_y)
        this.x = x
        this.y = y
        this.image = data.image
    }

    generatePos(sector_x: number, sector_y: number) {
        const max_x = this.quadrant_size * sector_x
        const min_x = max_x - this.quadrant_size
        const max_y = this.quadrant_size * sector_y
        const min_y = max_y - this.quadrant_size

        let x = random.int(min_x, max_x)
        let y = random.int(min_y, max_y)

        if (x + this.width > max_x) {
            x = this.generatePos(sector_x, sector_y).x
        }

        if (y + this.height > max_y) {
            y = this.generatePos(sector_x, sector_y).y
        }

        return { x, y }
    }

    private generateX() {
        return random.int(-5, 5)
    }

    private generateY() {
        return random.int(-5, 5)
    }

    move() {
        let x = this.generateX()
        let y = this.generateY()

        if (this.x + x < 0 || this.x + x + this.width > this.quadrant_size * 2) {
            x = this.generateX()
        }

        if (this.y + y < 0 || this.y + y + this.height > 1080) {
            y = this.generateX()
        }

        this.x += x
        this.y += y
    }
}
