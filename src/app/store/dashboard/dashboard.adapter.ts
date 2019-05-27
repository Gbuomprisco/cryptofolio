import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Tile } from '@core/classes/tile.class';

export const dashboardAdapter: EntityAdapter<Tile> = createEntityAdapter<
    Tile
>();
