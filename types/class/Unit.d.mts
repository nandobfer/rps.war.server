import type { UnitOptions } from "../types/UnitOptions.d.ts";
export declare class Unit {
    id: string;
    x: number;
    y: number;
    image: string;
    quadrant_size: number;
    width: number;
    height: number;
    constructor(data: UnitOptions);
    generatePos(sector_x: number, sector_y: number): {
        x: any;
        y: any;
    };
    private generateX;
    private generateY;
    move(): void;
}
