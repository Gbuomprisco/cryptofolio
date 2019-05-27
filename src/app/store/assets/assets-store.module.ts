import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { assetsReducer } from '@store/assets/assets.reducer';
import { AssetsFacadeService } from '@store/assets/assets-facade.service';
import { AssetsFacadeImplService } from '@store/assets/assets-facade-impl.service';
import { AssetsEffects } from '@store/assets/assets.effects';
import { AssetsFacadeMockService } from '@store/assets/assets-facade-mock.service';

@NgModule({
    imports: [
        StoreModule.forFeature('assets', assetsReducer),
        EffectsModule.forFeature([AssetsEffects])
    ],
    providers: [
        {
            provide: AssetsFacadeService,
            useClass: AssetsFacadeImplService
        }
    ]
})
export class AssetsStoreModule {}
