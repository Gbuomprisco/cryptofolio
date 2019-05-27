import { dashboardAdapter } from '@store/dashboard/dashboard.adapter';
import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Tile } from '@core/classes/tile.class';
import { EntityState } from '@ngrx/entity';

const { selectAll } = dashboardAdapter.getSelectors();

const selectDashboardState = createFeatureSelector<EntityState<Tile>>(
    'dashboard'
);

export const selectAllTiles: MemoizedSelector<object, Tile[]> = createSelector(
    selectDashboardState,
    selectAll
);
