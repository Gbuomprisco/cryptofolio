import { Action, createReducer, on } from '@ngrx/store';

import { PriceState } from '@core/interfaces/price-state.interface';
import { addPrice } from '@store/prices/prices.actions';

const initialState: PriceState = {};

export const pricesReducerFn = createReducer(
    initialState,
    on(addPrice, (state, { payload }) => {
        return { ...state, ...payload };
    })
);

export function pricesReducer(
    state = initialState,
    action: Action
): PriceState {
    return pricesReducerFn(state, action);
}
