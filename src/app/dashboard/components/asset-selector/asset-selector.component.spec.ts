import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSelectorComponent } from './asset-selector.component';

describe('AssetSelectorComponent', () => {
    let component: AssetSelectorComponent;
    let fixture: ComponentFixture<AssetSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssetSelectorComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AssetSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
