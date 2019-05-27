import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';

import { PriceState } from '@core/interfaces/price-state.interface';

import {
    addPrice,
    createPriceSubscription
} from '@store/prices/prices.actions';

import { PricesFacadeService } from '@store/prices/prices-facade.service';

import {
    selectPriceForAsset,
    selectSubscribedAssets
} from '@store/prices/prices.selectors';

@Injectable()
export class PricesFacadeServiceImpl implements PricesFacadeService {
    subscribedAssets$: Observable<string[]> = this.store.select(
        selectSubscribedAssets
    );

    constructor(private store: Store<EntityState<PriceState>>) {}

    public createPriceSubscription(assetId: string) {
        this.addInitialPrice(assetId);
        this.createSubscription(assetId);
    }

    public getPriceForAsset(assetId: string): Observable<string> {
        return this.store.select(selectPriceForAsset(assetId));
    }

    private addInitialPrice(assetId: string) {
        this.store.dispatch(addPrice({ payload: { [assetId]: '' } }));
    }

    private createSubscription(assetId: string) {
        this.store.dispatch(createPriceSubscription({ payload: assetId }));
    }
}
