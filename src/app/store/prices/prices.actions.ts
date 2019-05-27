import { props, createAction } from '@ngrx/store';
import { PriceState } from '@core/interfaces/price-state.interface';

export enum PricesActionsTypes {
    AddPrice = '[Prices Store] ADD_PRICE',
    CreatePriceSubscription = '[Prices Stream] CREATE_PRICE_SUBSCRIPTION',
    ClosePriceSubscription = '[Prices Stream] CLOSE_PRICE_SUBSCRIPTION',
    PriceReceived = '[Prices Stream] PRICE_RECEIVED'
}

export const addPrice = createAction(
    PricesActionsTypes.AddPrice,
    props<{ payload: PriceState }>()
);

export const createPriceSubscription = createAction(
    PricesActionsTypes.CreatePriceSubscription,
    props<{ payload: string }>()
);

export const closePriceSubscription = createAction(
    PricesActionsTypes.ClosePriceSubscription
);

export const priceReceived = createAction(
    PricesActionsTypes.PriceReceived,
    props<{ payload: PriceState }>()
);
