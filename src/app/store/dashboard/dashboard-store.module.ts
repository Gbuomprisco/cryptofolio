import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { dashboardReducer } from './dashboard.reducer';

import { DashboardFacadeService } from '@store/dashboard/dashboard-facade.service';
import { DashboardApiService } from '@store/dashboard/dashboard-api.service';
import { DashboardEffects } from '@store/dashboard/dashboard.effects';
import { DashboardFacadeServiceImpl } from '@store/dashboard/dashboard-facade-impl.service';

@NgModule({
    imports: [
        StoreModule.forFeature('dashboard', dashboardReducer),
        EffectsModule.forFeature([DashboardEffects])
    ],
    providers: [
        {
            provide: DashboardFacadeService,
            useClass: DashboardFacadeServiceImpl
        },
        DashboardApiService
    ]
})
export class DashboardStoreModule {}
