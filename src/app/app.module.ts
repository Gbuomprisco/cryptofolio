import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from '@core/core.module';

import { storeLogger } from 'ngrx-store-logger';
import { environment } from '@environment';

export function logger(reducer: ActionReducer<object>): any {
    return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([]),
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
