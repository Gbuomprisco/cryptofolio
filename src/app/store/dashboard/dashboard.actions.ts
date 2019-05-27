import { createAction, props } from '@ngrx/store';
import { Tile } from '@core/classes/tile.class';

export enum DashboardActionTypes {
    AddTile = '[Dashboard] ADD_TILE',
    RemoveTile = '[Dashboard] REMOVE_TILE',
    UpdateTileAsset = '[Dashboard] UPDATE_TILE_ASSET',
    UpdateTilePosition = '[Dashboard] UPDATE_TILE_POSITION'
}

export const addTile = createAction(
    DashboardActionTypes.AddTile,
    props<{ payload: Tile }>()
);

export const removeTile = createAction(
    DashboardActionTypes.RemoveTile,
    props<{ payload: string }>()
);

export const updateTileAsset = createAction(
    DashboardActionTypes.UpdateTileAsset,
    props<{
        payload: {
            id: string;
            assetId: string;
        };
    }>()
);

export const updateTilePosition = createAction(
    DashboardActionTypes.UpdateTilePosition,
    props<{
        payload: {
            id: string;
            prevPosition: number;
            nextPosition: number;
        };
    }>()
);
