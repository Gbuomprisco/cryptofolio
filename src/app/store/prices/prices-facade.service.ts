import { Observable } from 'rxjs';

export abstract class PricesFacadeService {
    subscribedAssets$: Observable<string[]>;
    abstract createPriceSubscription(assetId: string): void;
    abstract getPriceForAsset(assetId: string): Observable<string>;
}
