import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PricesFacadeService } from '@store/prices/prices-facade.service';
import { PricesFacadeServiceImpl } from '@store/prices/prices-facade-impl.service';
import { pricesReducer } from '@store/prices/prices.reducer';
import { PricesEffects } from '@store/prices/prices.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('prices', pricesReducer),
        EffectsModule.forFeature([PricesEffects])
    ],
    providers: [
        {
            provide: PricesFacadeService,
            useClass: PricesFacadeServiceImpl
        }
    ]
})
export class PricesStoreModule {}
