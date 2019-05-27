import { createAction, props } from '@ngrx/store';
import { Asset } from '@core/interfaces/asset.interface';

export enum AssetsActionsTypes {
    GetAssetsRequestStarted = '[Assets API] GET_ASSETS_REQUEST_STARTED',
    GetAssetsRequestSuccess = '[Assets API] GET_ASSETS_REQUEST_SUCCESS',
    AddAssets = '[Assets] ADD_ASSETS'
}

export const getAssetsRequestStarted = createAction(
    AssetsActionsTypes.GetAssetsRequestStarted,
    props<{ payload: string[] }>()
);

export const getAssetsRequestSuccess = createAction(
    AssetsActionsTypes.GetAssetsRequestSuccess,
    props<{ payload: Asset[] }>()
);

export const addAssets = createAction(
    AssetsActionsTypes.AddAssets,
    props<{ payload: Asset[] }>()
);
