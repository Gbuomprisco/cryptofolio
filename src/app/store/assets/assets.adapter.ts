import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Asset } from '@core/interfaces/asset.interface';

export const assetsAdapter: EntityAdapter<Asset> = createEntityAdapter<Asset>({
    selectId: (asset: Asset) => asset.id
});
