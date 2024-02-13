import { TeamOptions } from "../types/TeamOptions"
import { Unit } from "./Unit"

export class Team {
    units: Unit[] = []
    image: string

    constructor(data: TeamOptions) {
        this.image = data.image

        for (let index = 1; index <= data.units; index++) {
            const unit = new Unit(data)
            this.units.push(unit)
        }
    }
}
