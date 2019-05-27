import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardFacadeService } from '@store/dashboard';
import { Tile } from '@core/classes/tile.class';
import { AssetsFacadeService } from '@store/assets/assets-facade.service';

@Component({
    selector: 'cf-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
    public tiles$ = this.dashboardFacade.tiles$;

    constructor(
        private dashboardFacade: DashboardFacadeService,
        private assetsFacade: AssetsFacadeService
    ) {}

    ngOnInit() {
        this.assetsFacade.getAssets();
    }

    addTile(index: number) {
        this.dashboardFacade.addTile(new Tile(undefined, index));
    }
}
