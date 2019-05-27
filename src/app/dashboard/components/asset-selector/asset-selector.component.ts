import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output
} from '@angular/core';

import { AssetsFacadeService } from '@store/assets/assets-facade.service';

@Component({
    selector: 'cf-asset-selector',
    templateUrl: './asset-selector.component.html',
    styleUrls: ['./asset-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetSelectorComponent {
    @Output() assetSelected = new EventEmitter<string>();

    public assets$ = this.assetsFacade.assets$;

    constructor(private assetsFacade: AssetsFacadeService) {}
}
