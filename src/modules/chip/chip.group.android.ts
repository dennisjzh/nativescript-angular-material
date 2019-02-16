import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty, ViewBase} from 'tns-core-modules/ui/core/view';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ChipGroupCommon} from './chip.group.common';
import {ChipType} from './chip.common';
const Chip = require('./chip').Chip;

declare var android: any;

export class ChipGroup extends ChipGroupCommon {

    private chipList: string[] = [];
    private chipsObservable: BehaviorSubject<string[]> = new BehaviorSubject(this.chipList);

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setSingleLine(view);
        this.setSingleSelection(view);
        this.setUpListeners();
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

    _addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean {
        const success = super._addViewToNativeVisualTree(view, atIndex);
        if (success) {
            this.chipList.push(view[Chip.Text]);
            this.chipsObservable.next(this.chipList);
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

    private setUpListeners() {
        this.addEventListener(Chip.CloseEvent, data => {
            this.onChipClose(data.object);
        });
    }

    private onChipClose(chip) {
        this.removeChild(chip);
        this.chipList = this.refreshChips();
        this.chipsObservable.next(this.chipList);
    }

    private refreshChips(): string[] {
        const count = this.getChildrenCount();
        const chips = [];
        for (let i = 0; i < count; i++) {
            const chip = this.getChildAt(i);
            chips.push(chip[Chip.Text]);
        }
        return chips;
    }

    private createNativeViewByType() {
        return new android.support.design.chip.ChipGroup(this._context);
    }

}
