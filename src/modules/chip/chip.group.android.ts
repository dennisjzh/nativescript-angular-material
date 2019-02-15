import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty, EventData, View} from 'tns-core-modules/ui/core/view';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ChipGroupCommon} from './chip.group.common';
import {ChipType} from './chip.common';
const Chip = require('./chip').Chip;

declare var android: any;

export class ChipGroup extends ChipGroupCommon {

    private chipsObservable: BehaviorSubject<string[]> = new BehaviorSubject([]);

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setSingleLine(view);
        this.setSingleSelection(view);
        this.setUpListeners(view);
        return view;
    }

    add(chip: string) {
        const child = new Chip();
        child[Chip.Text] = chip;
        this.addChild(child);
    }

    addChild(view: View): void {
        super.addChild(view);
        this.updateChips();
        console.log(this.getChildrenCount());
    }

    get chips(): BehaviorSubject<string[]> {
        return this.chipsObservable;
    }

    [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
        return this.nativeView.getBackgroundTintList();
    }

    [backgroundColorProperty.setNative](value: Color | android.content.res.ColorStateList) {
        let theValue = value instanceof Color ? android.content.res.ColorStateList.valueOf(value.android) : value;
        try {
            this.nativeView.setBackgroundTintList(theValue);
        } catch (err) {
            console.log(`Error setNative backgroundColorProperty: `, err);
        }
    }

    private setSingleLine(view) {
        if (ChipGroup.SingleLine in this) {
            view.setSingleLine(true);
        }
    }

    private setSingleSelection(view) {
        if (this[ChipGroup.Type] === ChipType.Choice) {
            view.setSingleSelection(true);
        }
    }

    private setUpListeners(view) {
        this.addEventListener(Chip.CloseEvent, data => {
            this.onChipClose(data.object);
        });
    }

    private onChipClose(chip) {
        this.removeChild(chip);
        this.updateChips();
    }

    private createNativeViewByType() {
        console.log(new Chip().typeName + "WHAT!");
        return new android.support.design.chip.ChipGroup(this._context);
    }

    private updateChips(): void {
        const count = this.getChildrenCount();
        const chips = [];
        for (let i = 0; i < count; i++) {
            const chip = this.getChildAt(i);
            chips.push(chip[Chip.Text]);
        }
        this.chipsObservable.next(chips);
    }



}
