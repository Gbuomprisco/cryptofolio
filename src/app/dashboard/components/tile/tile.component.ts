import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Tile } from '@core/classes/tile.class';
import { DashboardFacadeService } from '@store/dashboard';
import { PricesFacadeService } from '@store/prices/prices-facade.service';

@Component({
    selector: 'cf-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent {
    @Input() tile: Tile;

    constructor(
        private dashboardFacade: DashboardFacadeService,
        private pricesFacade: PricesFacadeService
    ) {}

    updateTile(assetId: string) {
        this.dashboardFacade.updateTileAsset(this.tile.id, assetId);
        this.pricesFacade.createPriceSubscription(assetId);
    }
}
