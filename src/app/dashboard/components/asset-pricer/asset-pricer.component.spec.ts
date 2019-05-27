import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPricerComponent } from './asset-pricer.component';

describe('AssetPricerComponent', () => {
    let component: AssetPricerComponent;
    let fixture: ComponentFixture<AssetPricerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssetPricerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AssetPricerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
