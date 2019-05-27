import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityAdapter } from '@ngrx/entity';
import { Tile } from '@core/classes/tile.class';
import { selectAllTiles } from '@store/dashboard/dashboard.selectors';

import { addTile, updateTileAsset } from '@store/dashboard/dashboard.actions';

import { DashboardFacadeService } from '@store/dashboard/dashboard-facade.service';

@Injectable()
export class DashboardFacadeServiceImpl implements DashboardFacadeService {
    public tiles$: Observable<Tile[]> = this.store.select(selectAllTiles);

    constructor(private store: Store<EntityAdapter<Tile>>) {}

    addTile(payload: Tile) {
        this.store.dispatch(addTile({ payload }));
    }

    updateTileAsset(id: string, assetId: string) {
        this.store.dispatch(updateTileAsset({ payload: { id, assetId } }));
    }
}
