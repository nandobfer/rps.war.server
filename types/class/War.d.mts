/// <reference types="node" resolution-mode="require"/>
import { Server } from "socket.io";
import type { WarOptions } from "../types/WarOptions.d.ts";
import { Team } from "./Team.mjs";
export declare class War {
    teams: Team[];
    loop: NodeJS.Timer | null;
    io: Server | null;
    quadrant_size: number;
    units: number;
    constructor(data: WarOptions);
    start(): void;
    stop(): void;
    sync(): void;
}
