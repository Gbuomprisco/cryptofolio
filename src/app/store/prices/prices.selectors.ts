import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { PriceState } from '@core/interfaces/price-state.interface';

const prices: MemoizedSelector<object, PriceState> = createFeatureSelector(
    'prices'
);

export const selectPriceForAsset = (assetId: string) =>
    createSelector(
        prices,
        (state: PriceState) => state[assetId]
    );

export const selectSubscribedAssets = createSelector(
    prices,
    (state: PriceState) => Object.keys(state)
);
