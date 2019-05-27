import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

import { DashboardApiService } from '@store/dashboard/dashboard-api.service';

@Injectable()
export class DashboardEffects {
    constructor(private actions: Actions, private api: DashboardApiService) {}
}
