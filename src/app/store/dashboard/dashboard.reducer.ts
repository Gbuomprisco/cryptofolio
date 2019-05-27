import { EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import {
    addTile,
    removeTile,
    updateTileAsset,
    updateTilePosition
} from '@store/dashboard/dashboard.actions';

import { dashboardAdapter } from '@store/dashboard/dashboard.adapter';
import { Tile } from '@core/classes/tile.class';

const emptyTile = new Tile(undefined, 0);
const initialState = dashboardAdapter.addOne(
    emptyTile,
    dashboardAdapter.getInitialState()
);

export const dashboardReducerFn = createReducer(
    initialState,
    on(addTile, (state, { payload }) => {
        return dashboardAdapter.addOne(payload, state);
    }),
    on(removeTile, (state, { payload }) => {
        return dashboardAdapter.removeOne(payload, state);
    }),
    on(updateTileAsset, (state, { payload }: { payload: Tile }) => {
        return dashboardAdapter.updateOne(
            { id: payload.id, changes: { assetId: payload.assetId } },
            state
        );
    })
);

export function dashboardReducer(
    state = initialState,
    action: Action
): EntityState<Tile> {
    return dashboardReducerFn(state, action);
}
