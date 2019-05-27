import { Observable } from 'rxjs';
import { Asset } from '@core/interfaces/asset.interface';

export abstract class AssetsFacadeService {
    abstract assets$: Observable<Asset[] | undefined>;
    abstract getAssets(): void;
}
