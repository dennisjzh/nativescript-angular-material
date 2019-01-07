import {Color} from 'tns-core-modules/color';
import {backgroundColorProperty} from 'tns-core-modules/ui/core/view';
import {ChipGroupCommon} from './chip.group.common';

declare var android: any;
declare var com: any;

export class ChipGroup extends ChipGroupCommon {

    get android(): any {
        return this.nativeView;
    }

    public createNativeView() {
        let view = this.createNativeViewByType();
        this.setOnClickListener(view);
        this.setSingleLine(view);
        return view;
    }

    private createNativeViewByType() {
        return new android.support.design.chip.ChipGroup(this._context);
    }

    private setOnClickListener(view) {
        const self = new WeakRef(this);
        view.setOnClickListener(
            new android.view.View.OnClickListener({
                get owner() {
                    return self.get();
                },
                onClick: function (v) {
                    if (this.owner) {
                        this.owner._emit(ChipGroup.TabEvent);
                    }
                }
            })
        );
    }

    private setSingleLine(view) {
        if (ChipGroup.SingleLine in this) {
            view.setSingleLine(true);
        }
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
}
