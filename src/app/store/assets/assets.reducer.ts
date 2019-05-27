import { Action, createReducer, on } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { Asset } from '@core/interfaces/asset.interface';
import { assetsAdapter } from '@store/assets/assets.adapter';
import { addAssets } from '@store/assets/assets.actions';

const initialState = assetsAdapter.getInitialState();

export const assetsReducerFn = createReducer(
    initialState,
    on(addAssets, (state, { payload }) => {
        return assetsAdapter.addAll(payload, state);
    })
);

export function assetsReducer(
    state: EntityState<Asset> | undefined,
    action: Action
) {
    return assetsReducerFn(state, action);
}
