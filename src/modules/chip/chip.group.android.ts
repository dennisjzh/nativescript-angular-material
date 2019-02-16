import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty, ViewBase} from 'tns-core-modules/ui/core/view';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ChipGroupCommon} from './chip.group.common';
import {ChipType, ChipCommon} from './chip.common';
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
        this.setupListeners();
        return view;
    }

    add(chip: string) {
        const child = new Chip();
        child[Chip.Text] = chip;
        this.addChild(child);
    }

    get chips(): BehaviorSubject<string[]> {
        return this.chipsObservable;
    }

    [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
        return this.android.getBackgroundTintList();
    }

    [backgroundColorProperty.setNative](value: Color | android.content.res.ColorStateList) {
        let theValue = value instanceof Color ? android.content.res.ColorStateList.valueOf(value.android) : value;
        try {
            this.android.setBackgroundTintList(theValue);
        } catch (err) {
            console.log(`Error setNative backgroundColorProperty: `, err);
        }
    }

    _addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean {
        const success = super._addViewToNativeVisualTree(view, atIndex);
        if (success) {
            this.chipsObservable.next(this.refreshChips());
        }
        return success;
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

    private setupListeners() {
        this.addEventListener(Chip.CloseEvent, data => {
            this.onChipClose(data.object);
        });
        this.addEventListener(Chip.CheckEvent, data => {
            this.onChipCheckChanged(data.object);
        });
    }

    private onChipClose(chip) {
        this.removeChild(chip);
        this.chipsObservable.next(this.refreshChips());
    }

    private onChipCheckChanged(chip) {
        this.chipsObservable.next(this.refreshChips());
    }

    private refreshChips(): string[] {
        const count = this.getChildrenCount();
        const chips = [];
        for (let i = 0; i < count; i++) {
            const chip: ChipCommon = this.getChildAt(i) as ChipCommon;
            if (this[Chip.Type] !== ChipType.Filter && this[Chip.Type] !== ChipType.Choice || chip.isChecked()) {
                chips.push(chip[Chip.Text]);
            }
        }
        return chips;
    }

    private createNativeViewByType() {
        return new android.support.design.chip.ChipGroup(this._context);
    }

}
