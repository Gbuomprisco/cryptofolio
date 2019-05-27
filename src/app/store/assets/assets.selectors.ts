import { EntityState } from '@ngrx/entity';

import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { assetsAdapter } from '@store/assets/assets.adapter';
import { Asset } from '@core/interfaces/asset.interface';

const { selectAll } = assetsAdapter.getSelectors();
const selectAssetsState = createFeatureSelector<EntityState<Asset>>('assets');

export const selectAllAssets: MemoizedSelector<
    object,
    Asset[]
> = createSelector(
    selectAssetsState,
    selectAll
);
