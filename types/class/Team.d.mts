import type { TeamOptions } from "../types/TeamOptions.d.ts";
import { Unit } from "./Unit.mjs";
export declare class Team {
    units: Unit[];
    image: string;
    constructor(data: TeamOptions);
}
