import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// store
import { DashboardStoreModule } from '@store/dashboard';

// top component
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TileComponent } from './components/tile/tile.component';
import { PricesStoreModule } from '@store/prices/prices-store.module';
import { AssetsStoreModule } from '@store/assets/assets-store.module';

import { AssetSelectorComponent } from './components/asset-selector/asset-selector.component';
import { AssetPricerComponent } from './components/asset-pricer/asset-pricer.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const route: Route = {
    component: DashboardComponent,
    path: ''
};

@NgModule({
    declarations: [
        DashboardComponent,
        TileComponent,
        AssetSelectorComponent,
        AssetPricerComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([route]),

        // store
        DashboardStoreModule,
        PricesStoreModule,
        AssetsStoreModule,

        // material
        DragDropModule,
        FlexLayoutModule,
        MatGridListModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    exports: [RouterModule]
})
export class DashboardModule {}
