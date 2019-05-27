import { PricesFacadeService } from '@store/prices/prices-facade.service';
import { Observable, of } from 'rxjs';

export class PricesFacadeServiceMock implements PricesFacadeService {
    subscribedAssets$ = of([]);
    createPriceSubscription(assetId: string) {}
    getPriceForAsset(assetId: string): Observable<string> {
        return of('20');
    }
}
