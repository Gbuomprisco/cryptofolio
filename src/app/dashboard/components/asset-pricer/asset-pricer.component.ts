import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';

import { merge, Observable, timer } from 'rxjs';
import { PricesFacadeService } from '@store/prices/prices-facade.service';
import {
    filter,
    map,
    mapTo,
    pairwise,
    shareReplay,
    switchMap
} from 'rxjs/operators';

import { Trend } from '@enums/trend.enum';

@Component({
    selector: 'cf-asset-pricer',
    templateUrl: './asset-pricer.component.html',
    styleUrls: ['./asset-pricer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetPricerComponent implements OnInit {
    @Input()
    public asset: string;

    public price$: Observable<string>;
    public trend$: Observable<Trend>;

    public readonly trends = Trend;

    constructor(private pricesFacade: PricesFacadeService) {}

    ngOnInit() {
        this.price$ = this.pricesFacade.getPriceForAsset(this.asset).pipe(
            filter(Boolean),
            map((price: string) => {
                return parseFloat(price).toFixed(2);
            }),
            shareReplay(1)
        );

        const timer$ = this.price$.pipe(
            switchMap(() => timer(2000)),
            mapTo(Trend.Stale)
        );

        const trend$ = this.price$.pipe(
            pairwise(),
            filter((prices: string[]) => prices[0] !== prices[1]),
            map((prices: string[]) => prices.map(parseFloat)),
            map(([previous, current]: number[]) => {
                return current > previous ? Trend.Up : Trend.Down;
            })
        );

        this.trend$ = merge(trend$, timer$);
    }
}
