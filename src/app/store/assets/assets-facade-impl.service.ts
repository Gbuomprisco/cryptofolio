import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { AssetsFacadeService } from '@store/assets/assets-facade.service';
import { Asset } from '@core/interfaces/asset.interface';
import { getAssetsRequestStarted } from '@store/assets/assets.actions';
import { selectAllAssets } from '@store/assets/assets.selectors';

@Injectable()
export class AssetsFacadeImplService implements AssetsFacadeService {
    public assets$ = this.store.select(selectAllAssets);

    constructor(private store: Store<EntityState<Asset>>) {}

    getAssets() {
        this.store.dispatch(
            getAssetsRequestStarted({
                payload: []
            })
        );
    }
}
