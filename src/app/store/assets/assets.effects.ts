import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// rx
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

// core
import { CoincapService } from '@core/services/coincap.service';

import {
    getAssetsRequestSuccess,
    addAssets,
    getAssetsRequestStarted
} from '@store/assets/assets.actions';

import { Asset } from '@core/interfaces/asset.interface';
import { GetAssetsResponseDto } from '@store/assets/core/interfaces/get-assets-response-dto.interface';

@Injectable()
export class AssetsEffects {
    constructor(private actions: Actions, private coincap: CoincapService) {}

    public getAllAssets$ = this.getAllAssets();
    public addAssets$ = this.addAssets();

    private addAssets() {
        return createEffect(() =>
            this.actions.pipe(
                ofType(getAssetsRequestSuccess.type),
                map(({ payload }: { payload: Asset[] }) =>
                    addAssets({ payload })
                )
            )
        );
    }

    private getAllAssets() {
        return createEffect(() =>
            this.actions.pipe(
                ofType(getAssetsRequestStarted.type),
                mergeMap(({ payload }: { payload: string[] }) =>
                    this.coincap.getAssets(payload).pipe(
                        map((response: GetAssetsResponseDto) => response.data),
                        catchError(() => of(undefined))
                    )
                ),
                filter(Boolean),
                map((payload: Asset[]) => {
                    return getAssetsRequestSuccess({ payload });
                })
            )
        );
    }
}
