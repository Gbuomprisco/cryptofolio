import * as uuid from 'uuid';

export class Tile {
    public readonly id = uuid();

    constructor(public assetId?: string, public position?: number) {}
}
