import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, takeUntil, withLatestFrom } from 'rxjs/operators';

import {
    addPrice,
    closePriceSubscription,
    createPriceSubscription,
    priceReceived
} from '@store/prices/prices.actions';

import { PriceState } from '@core/interfaces/price-state.interface';
import { CoincapService } from '@core/services/coincap.service';
import { PricesFacadeService } from '@store/prices/prices-facade.service';

@Injectable()
export class PricesEffects {
    constructor(
        private actions: Actions,
        private coincap: CoincapService,
        private pricesFacade: PricesFacadeService
    ) {}

    createPriceSubscription$ = this.createPriceSubscription();
    prices$ = this.getPrices();

    private createPriceSubscription() {
        return createEffect(() =>
            this.actions.pipe(
                ofType(createPriceSubscription.type),
                map(({ payload }) => payload),
                withLatestFrom(this.pricesFacade.subscribedAssets$),
                mergeMap(([payload, assets]: [string, string[]]) => {
                    return this.connectPriceStream([...assets, payload]);
                }),
                map((price: PriceState) => priceReceived({ payload: price }))
            )
        );
    }

    private getPrices() {
        return createEffect(() =>
            this.actions.pipe(
                ofType(priceReceived.type),
                map(({ payload }) => addPrice({ payload }))
            )
        );
    }

    private connectPriceStream(assets: string[]) {
        return this.coincap
            .connectToPriceStream(assets)
            .pipe(
                takeUntil(
                    this.actions.pipe(ofType(closePriceSubscription.type))
                )
            );
    }
}
