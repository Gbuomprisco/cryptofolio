import { NgModule } from '@angular/core';
import { CoincapService } from '@core/services/coincap.service';

@NgModule({
    providers: [CoincapService]
})
export class CoreModule {}
