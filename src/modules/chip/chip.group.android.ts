import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty} from 'tns-core-modules/ui/core/view';
import {ChipGroupCommon} from './chip.group.common';
import {ChipType} from './chip.common';
let Chip = require("./chip").Chip;
declare var android: any;

export class ChipGroup extends ChipGroupCommon {

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setSingleLine(view);
        this.setSingleSelection(view);
        return view;
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

    private createNativeViewByType() {
        console.log(new Chip().typeName + "WHAT!");
        return new android.support.design.chip.ChipGroup(this._context);
    }

}
