import { Observable } from 'rxjs';
import { Tile } from '@core/classes/tile.class';

export abstract class DashboardFacadeService {
    abstract tiles$: Observable<Tile[]>;

    abstract addTile(tile: Tile): void;
    abstract updateTileAsset(id: string, assetId: string): void;
}
