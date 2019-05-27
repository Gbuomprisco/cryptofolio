import { AssetsFacadeService } from '@store/assets/assets-facade.service';
import { of } from 'rxjs';
import { Asset } from '@core/interfaces/asset.interface';
import { addAssets } from '@store/assets/assets.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

const assets: Asset[] = [
    {
        id: 'bitcoin',
        rank: '1',
        symbol: 'BTC',
        name: 'Bitcoin',
        supply: '17678437.0000000000000000',
        maxSupply: '21000000.0000000000000000',
        marketCapUsd: '95541809154.7856837952152066',
        volumeUsd24Hr: '3940984178.0783574242823204',
        priceUsd: '5404.4262597867494618',
        changePercent24Hr: '1.9493441581483455',
        vwap24Hr: '5358.8190775374824026'
    },
    {
        id: 'ethereum',
        rank: '2',
        symbol: 'ETH',
        name: 'Ethereum',
        supply: '105901641.8116000000000000',
        maxSupply: null,
        marketCapUsd: '16789284526.1337450602387057',
        volumeUsd24Hr: '1768241925.8492568022326147',
        priceUsd: '158.5365839370275059',
        changePercent24Hr: '-0.1524342328846439',
        vwap24Hr: '158.8034557100254355'
    },
    {
        id: 'ripple',
        rank: '3',
        symbol: 'XRP',
        name: 'XRP',
        supply: '42004966728.0000000000000000',
        maxSupply: '100000000000.0000000000000000',
        marketCapUsd: '12526610531.8941631048771128',
        volumeUsd24Hr: '249694526.8961261014874807',
        priceUsd: '0.2982173658893551',
        changePercent24Hr: '-0.8569654508215899',
        vwap24Hr: '0.2995824974358594'
    },
    {
        id: 'bitcoin-cash',
        rank: '4',
        symbol: 'BCH',
        name: 'Bitcoin Cash',
        supply: '17760200.0000000000000000',
        maxSupply: '21000000.0000000000000000',
        marketCapUsd: '4789115316.2087923868422400',
        volumeUsd24Hr: '257051765.8431549685671496',
        priceUsd: '269.6543572825076512',
        changePercent24Hr: '1.6058057413976456',
        vwap24Hr: '270.3848385271208990'
    },
    {
        id: 'litecoin',
        rank: '5',
        symbol: 'LTC',
        name: 'Litecoin',
        supply: '61596282.6205068000000000',
        maxSupply: '84000000.0000000000000000',
        marketCapUsd: '4437338272.7586670720162798',
        volumeUsd24Hr: '930752380.8652332936138013',
        priceUsd: '72.0390595662566248',
        changePercent24Hr: '-0.3411374727518525',
        vwap24Hr: '72.5923561873498199'
    }
];

@Injectable()
export class AssetsFacadeMockService implements AssetsFacadeService {
    assets$ = of(assets);

    constructor(private store: Store<any>) {}

    getAssets() {
        this.store.dispatch(addAssets({ payload: assets }));
    }
}
